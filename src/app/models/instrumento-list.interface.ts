// Generated by https://quicktype.io

export interface InstrumentoListResponse {
    content:       AllInstrumentoDTO[];
    size:          number;
    totalElements: number;
    pageNumber:    number;
    first:         boolean;
    last:          boolean;
}

export interface AllInstrumentoDTO {
    id:     string;
    nombre: string;
    fecha:  string;
}

