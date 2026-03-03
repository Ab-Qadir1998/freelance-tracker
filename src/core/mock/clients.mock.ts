export type ClientsInterface = {
    id: string
    clientName: string
    contact: string
    activeProjects: number
    pendingAmount: number
}

export const clientsData: ClientsInterface[] = [
    {
        id: "1",
        clientName: 'client A',
        contact: "032144558787",
        activeProjects: 3,
        pendingAmount: 5000
    },
    {
        id: "2",
        clientName: 'client B',
        contact: "032144558787",
        activeProjects: 3,
        pendingAmount: 5000
    },
    {
        id: "3",
        clientName: 'client C',
        contact: "032144558787",
        activeProjects: 3,
        pendingAmount: 5000
    },
]