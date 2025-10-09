import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { campaign: "Display", roi: 145, impressions: 52000 },
  { campaign: "Video", roi: 189, impressions: 38000 },
  { campaign: "Social", roi: 167, impressions: 61000 },
  { campaign: "Search", roi: 203, impressions: 29000 },
  { campaign: "Native", roi: 134, impressions: 44000 },
];

const ResponseChart = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Campaign ROI Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="campaign" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#111827" }}
          />
          <Bar dataKey="roi" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseChart;
