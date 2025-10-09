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
    <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Top Performing Campaigns</h3>
      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 hover:bg-gray-50">
              <TableHead className="text-gray-600 font-semibold">Campaign</TableHead>
              <TableHead className="text-gray-600 font-semibold">CTR</TableHead>
              <TableHead className="text-gray-600 font-semibold">Conversions</TableHead>
              <TableHead className="text-gray-600 font-semibold">Spend</TableHead>
              <TableHead className="text-gray-600 font-semibold">ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{row.campaign}</TableCell>
                <TableCell className="text-gray-700">{row.ctr}</TableCell>
                <TableCell className="text-gray-700">{row.conversions}</TableCell>
                <TableCell className="text-gray-700">{row.spend}</TableCell>
                <TableCell className="text-primary font-semibold">{row.roi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResponseTable;
