type Kraj = "Praha" | "Středočeský" | "Jihočeský" | "Plzeňský" | "Karlovarský" | "Ústecký" | "Liberecký" | "Královehradecký" | "Pardubický" | "Královehradecký" | "Vysočina" | "Jihomoravský" | "Olomoucká"| "Zlínský" | "Moravskoslezský"
type PartyName = "ANO 2011" | "SPOLU" | "PirStan" | "SPD"| "ČSSD" | "KSČM" | "TSS" | "Přísaha"

export type PartyRegionResult = {
    r_name: Kraj;
    p_name: PartyName;
    gps: [longitude: number, latitude: number];
    color: [r:number,g:number,b:number,a:number];
    voters: number;
} 