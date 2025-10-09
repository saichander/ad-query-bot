import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableData = [
  { campaign: "Summer Travel", ctr: "3.2%", conversions: 1243, spend: "$12,400", roi: "203%" },
  { campaign: "Weekend Deals", ctr: "2.8%", conversions: 987, spend: "$8,900", roi: "189%" },
  { campaign: "Business Class", ctr: "2.1%", conversions: 543, spend: "$15,200", roi: "167%" },
  { campaign: "Last Minute", ctr: "4.1%", conversions: 1876, spend: "$9,800", roi: "145%" },
  { campaign: "Family Packages", ctr: "1.9%", conversions: 654, spend: "$11,100", roi: "134%" },
];

const ResponseTable = () => {
  return (
    <div className="glass-strong rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Top Performing Campaigns</h3>
      <div className="rounded-lg border border-white/10 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="text-muted-foreground">Campaign</TableHead>
              <TableHead className="text-muted-foreground">CTR</TableHead>
              <TableHead className="text-muted-foreground">Conversions</TableHead>
              <TableHead className="text-muted-foreground">Spend</TableHead>
              <TableHead className="text-muted-foreground">ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-foreground">{row.campaign}</TableCell>
                <TableCell className="text-foreground">{row.ctr}</TableCell>
                <TableCell className="text-foreground">{row.conversions}</TableCell>
                <TableCell className="text-foreground">{row.spend}</TableCell>
                <TableCell className="text-accent font-semibold">{row.roi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResponseTable;
