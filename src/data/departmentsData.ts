// src/data/departmentsData.ts

export interface DepartmentData {
    department: string;
    sub_departments: string[];
  }
  
  const departmentsData: DepartmentData[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];
  
  export default departmentsData;
  