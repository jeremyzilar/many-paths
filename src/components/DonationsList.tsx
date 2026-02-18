"use client";

import { useEffect, useState } from "react";
import { DonationsRecord, ProvidersRecord } from "@/types/airtable";
import { getDonationsRecords, getProvidersRecords } from "@/lib/airtable";

type SortOption = "priority" | "provider" | "date";

export function DonationsList() {
  const [donations, setDonations] = useState<DonationsRecord[]>([]);
  const [providers, setProviders] = useState<ProvidersRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("priority");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const [donationsData, providersData] = await Promise.all([
          getDonationsRecords(),
          getProvidersRecords(),
        ]);
        setDonations(donationsData);
        setProviders(providersData);
      } catch {
        setError("Failed to load donations data.");
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, []);

  // Get priority color
  const getPriorityColor = (priority: string | undefined) => {
    switch (priority) {
      case "Urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Normal":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Low":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">Loading needs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (donations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">
          No items needed at this time.
        </p>
      </div>
    );
  }

  // Get provider name from linked record ID
  const getProviderName = (providerIds: string[] | undefined) => {
    if (!providerIds || providerIds.length === 0) {
      return null;
    }

    // Get the first provider by ID
    const providerId = providerIds[0];
    const provider = providers.find((p) => p.id === providerId);
    return provider?.fields.Name || null;
  };

  // Get phone number from lookup field or provider
  const getPhoneNumber = (donation: DonationsRecord) => {
    // First check lookup field
    if (
      donation.fields["Contact Phone"] &&
      donation.fields["Contact Phone"].length > 0
    ) {
      return donation.fields["Contact Phone"][0];
    }

    // Fall back to provider's phone
    if (
      donation.fields["Requesting Organization"] &&
      donation.fields["Requesting Organization"].length > 0
    ) {
      const providerId = donation.fields["Requesting Organization"][0];
      const provider = providers.find((p) => p.id === providerId);
      return provider?.fields.Phone || null;
    }

    return null;
  };

  // Get drop-off location
  const getDropOffLocation = (donation: DonationsRecord) => {
    if (
      donation.fields["Drop-off Location"] &&
      donation.fields["Drop-off Location"].length > 0
    ) {
      return donation.fields["Drop-off Location"][0];
    }
    return null;
  };

  // Filter to only show open/partially fulfilled items
  const activeItems = donations.filter(
    (d) =>
      d.fields.Status === "Open" || d.fields.Status === "Partially Fulfilled"
  );

  // Sort based on selected option
  const priorityOrder = { Urgent: 0, High: 1, Normal: 2, Low: 3 };
  const sortedDonations = [...activeItems].sort((a, b) => {
    switch (sortBy) {
      case "priority": {
        const aPriority =
          priorityOrder[a.fields.Priority as keyof typeof priorityOrder] ?? 4;
        const bPriority =
          priorityOrder[b.fields.Priority as keyof typeof priorityOrder] ?? 4;
        return aPriority - bPriority;
      }
      case "provider": {
        const aProvider =
          getProviderName(a.fields["Requesting Organization"]) || "";
        const bProvider =
          getProviderName(b.fields["Requesting Organization"]) || "";
        return aProvider.localeCompare(bProvider);
      }
      case "date": {
        // Sort by createdTime, newest first
        const aDate = new Date(a.createdTime).getTime();
        const bDate = new Date(b.createdTime).getTime();
        return bDate - aDate;
      }
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-4">
      {/* Header with count and sort */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {sortedDonations.length} items needed by local providers
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Sort by:
          </span>
          <div className="flex gap-1">
            {(
              [
                { key: "priority", label: "Priority" },
                { key: "provider", label: "Provider" },
                { key: "date", label: "Date added" },
              ] as const
            ).map((option) => (
              <button
                key={option.key}
                onClick={() => setSortBy(option.key)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  sortBy === option.key
                    ? "bg-accent-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Needed List */}
      {sortedDonations.map((donation) => {
        const remaining =
          donation.fields["Quantity Remaining"] ??
          (donation.fields["Quantity Needed"] || 0) -
            (donation.fields["Quantity Delivered"] || 0);

        return (
          <div
            key={donation.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-4">
              {/* Header: Item Name + Priority + Quantity */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {donation.fields["Item Name"]}
                    </h3>
                    {donation.fields.Priority && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-medium ${getPriorityColor(donation.fields.Priority)}`}
                      >
                        {donation.fields.Priority}
                      </span>
                    )}
                  </div>
                  {/* Quantity + Notes inline */}
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {donation.fields["Quantity Needed"] && (
                      <span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {remaining > 0
                            ? remaining
                            : donation.fields["Quantity Needed"]}
                        </span>{" "}
                        {donation.fields["Unit Type"]?.toLowerCase() || "items"}{" "}
                        needed
                        {donation.fields.Notes && (
                          <span className="mx-1">·</span>
                        )}
                      </span>
                    )}
                    {donation.fields.Notes && (
                      <span>{donation.fields.Notes}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Provider + Contact Info + Tags */}
            <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                {/* Provider + Contact */}
                <div className="flex items-center gap-3 text-sm">
                  {donation.fields["Requesting Organization"] && (
                    <span className="font-semibold text-accent-purple-600 dark:text-accent-purple-400">
                      {getProviderName(
                        donation.fields["Requesting Organization"]
                      )}
                    </span>
                  )}
                  {getDropOffLocation(donation) && (
                    <span className="text-gray-600 dark:text-gray-400">
                      📍 {getDropOffLocation(donation)}
                    </span>
                  )}
                  {getPhoneNumber(donation) && (
                    <a
                      href={`tel:${getPhoneNumber(donation)}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📞 {getPhoneNumber(donation)}
                    </a>
                  )}
                </div>
                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {donation.fields.Category && (
                    <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                      {donation.fields.Category}
                    </span>
                  )}
                  {donation.fields.Season &&
                    donation.fields.Season !== "Year-round" && (
                      <span className="text-xs px-2 py-0.5 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 rounded">
                        {donation.fields.Season}
                      </span>
                    )}
                  {donation.fields.Recurrence &&
                    donation.fields.Recurrence !== "One-time" && (
                      <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded">
                        {donation.fields.Recurrence}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
