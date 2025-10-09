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
    <div className="glass-strong rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Campaign ROI Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="campaign" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="roi" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseChart;
