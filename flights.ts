import {Flight} from "./flight.models.ts";

export function getFlights(orig: string, dest: string): Promise<Flight[]> {
    const flights: Flight[] = [{id: "0001", orig, dest}]
    return Promise.resolve(flights)
}
