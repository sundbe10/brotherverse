export class Episode {
    number: number;
    name: string;
    episodeLink: string;
    description: string;
    image: string;
    location: string;
}

export class Location {
    id: number;
    name: string;
    description: string;
    x: number;
    y: number;
}

export class GameData {
    locations: Location[];
    episodes: Episode[];
}