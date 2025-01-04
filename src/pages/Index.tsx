import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">داشبورد</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">درخواست‌های جدید</h3>
            <p className="text-3xl font-bold text-primary">۱۲</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">درخواست‌های تایید شده</h3>
            <p className="text-3xl font-bold text-success">۴۵</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">مجموع تسهیلات</h3>
            <p className="text-3xl font-bold text-secondary">۱,۲۳۴,۵۶۷,۸۹۰ ریال</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;