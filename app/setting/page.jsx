import React from "react";

export default function ReviewPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
      <p className="text-gray-700">Read what other users are saying about their favorite movies.</p>
      {/* Placeholder for reviews */}
      <div className="mt-6 space-y-4">
        <div className="p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-600">I absolutely loved the latest Marvel movie! The action scenes were incredible and the storyline kept me hooked from start to finish.</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-semibold">Jane Smith</h2>
          <p className="text-gray-600">The new indie film I watched last night was a hidden gem. The performances were outstanding and the cinematography was breathtaking.</p>
        </div>
      </div>
    </div>
  );
}