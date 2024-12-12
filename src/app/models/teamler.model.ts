export interface Teamler {
    teamlerId: number;
    name: string;
    description: string;
    dcId: string;
    dcName: string;
    accessionDate: Date;
    rankId: number;
    rankAssignedDate: Date;
    ticketCount: number;
    arrivalCount: number;
    archived: boolean;
}