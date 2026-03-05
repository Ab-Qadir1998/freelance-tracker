export type ClientStatus = "active" | "inactive";
export type ClientPlatform = "Upwork" | "Fiverr" | "Toptal" | "Direct" | "Freelancer";

export type ClientsInterface = {
  id: string;
  clientName: string;
  email: string;
  contact: string;
  platform: ClientPlatform;
  status: ClientStatus;
  activeProjects: number;
  pendingAmount: number;
  joinedAt: string;
};

export const clientsData: ClientsInterface[] = [
  {
    id: "1",
    clientName: "James Hartwell",
    email: "james.hartwell@techcorp.io",
    contact: "+1-415-555-0192",
    platform: "Upwork",
    status: "active",
    activeProjects: 3,
    pendingAmount: 4500,
    joinedAt: "2024-06-15",
  },
  {
    id: "2",
    clientName: "Sophia Müller",
    email: "sophia.muller@designhaus.de",
    contact: "+49-30-555-0187",
    platform: "Fiverr",
    status: "active",
    activeProjects: 2,
    pendingAmount: 1800,
    joinedAt: "2024-09-01",
  },
  {
    id: "3",
    clientName: "Ravi Patel",
    email: "ravi.patel@startuplab.in",
    contact: "+91-98765-43210",
    platform: "Direct",
    status: "active",
    activeProjects: 1,
    pendingAmount: 3200,
    joinedAt: "2024-11-20",
  },
  {
    id: "4",
    clientName: "Aisha Al-Farsi",
    email: "aisha@alfarsigroup.ae",
    contact: "+971-50-555-0123",
    platform: "Toptal",
    status: "inactive",
    activeProjects: 0,
    pendingAmount: 750,
    joinedAt: "2024-03-10",
  },
  {
    id: "5",
    clientName: "Carlos Mendez",
    email: "c.mendez@digitalwave.mx",
    contact: "+52-55-5555-0198",
    platform: "Upwork",
    status: "active",
    activeProjects: 2,
    pendingAmount: 2100,
    joinedAt: "2025-01-05",
  },
  {
    id: "6",
    clientName: "Emily Thornton",
    email: "emily@thorntonventures.co.uk",
    contact: "+44-20-5555-0174",
    platform: "Freelancer",
    status: "active",
    activeProjects: 1,
    pendingAmount: 900,
    joinedAt: "2025-02-18",
  },
];
