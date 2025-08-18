
export interface PokemonInterface {
    cries:                    Cries;
    location_area_encounters: string;
    types:                    Type[];
    base_experience:          number;
    held_items:               any[];
    weight:                   number;
    is_default:               boolean;
    past_types:               any[];
    sprites:                  Sprites;
    past_abilities:           PastAbility[];
    abilities:                PokemonInterfaceAbility[];
    game_indices:             GameIndex[];
    species:                  Species;
    stats:                    Stat[];
    moves:                    Move[];
    name:                     string;
    id:                       number;
    forms:                    Species[];
    height:                   number;
    order:                    number;
}

export interface PokemonInterfaceAbility {
    is_hidden: boolean;
    ability:   Species;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Cries {
    legacy: string;
    latest: string;
}

export interface GameIndex {
    game_index: number;
    version:    Species;
}

export interface Move {
    version_group_details: VersionGroupDetail[];
    move:                  Species;
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    version_group:     Species;
    move_learn_method: Species;
    order?:            number;
}

export interface PastAbility {
    abilities:  PastAbilityAbility[];
    generation: Species;
}

export interface PastAbilityAbility {
    is_hidden: boolean;
    slot:      number;
}

export interface GenerationIv {
    platinum:               Sprites;
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
}

export interface Versions {
    "generation-iii":  GenerationIii;
    "generation-ii":   GenerationIi;
    "generation-v":    GenerationV;
    "generation-iv":   GenerationIv;
    "generation-vii":  GenerationVii;
    "generation-i":    GenerationI;
    "generation-viii": GenerationViii;
    "generation-vi":   { [key: string]: Home };
}

export interface Sprites {
    back_shiny_female:  string;
    back_female:        string;
    other?:             Other;
    back_default:       string;
    front_shiny_female: string;
    front_default:      string;
    versions?:          Versions;
    front_female:       string;
    back_shiny:         string;
    front_shiny:        string;
}

export interface GenerationI {
    yellow:     RedBlue;
    "red-blue": RedBlue;
}

export interface RedBlue {
    front_gray:        string;
    back_transparent:  string;
    back_default:      string;
    back_gray:         string;
    front_default:     string;
    front_transparent: string;
}

export interface GenerationIi {
    gold:    Gold;
    crystal: Crystal;
    silver:  Gold;
}

export interface Crystal {
    back_transparent:        string;
    back_shiny_transparent:  string;
    back_default:            string;
    front_default:           string;
    front_transparent:       string;
    front_shiny_transparent: string;
    back_shiny:              string;
    front_shiny:             string;
}

export interface Gold {
    back_default:       string;
    front_default:      string;
    front_transparent?: string;
    back_shiny:         string;
    front_shiny:        string;
}

export interface GenerationIii {
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
    emerald:             OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny:   string;
}

export interface GenerationV {
    "black-white": Showdown;
}

export interface Showdown {
    back_female:        string;
    back_default:       string;
    front_shiny_female: string;
    front_default:      string;
    front_female:       string;
    back_shiny:         string;
    front_shiny:        string;
    back_shiny_female?: string;
    animated?:          Showdown;
}

export interface Home {
    front_shiny_female: string;
    front_default:      string;
    front_female:       string;
    front_shiny:        string;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    showdown:           Showdown;
    "official-artwork": OfficialArtwork;
    home:               Home;
}

export interface Stat {
    stat:      Species;
    base_stat: number;
    effort:    number;
}

export interface Type {
    slot: number;
    type: Species;
}
