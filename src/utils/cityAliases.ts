// src/utils/cityAliases.ts
export const cityAliases: Record<string, string> = {
    // Alemanha
    "berlim": "berlin",
    "munique": "munich",
    "colônia": "cologne",
    // Austria
    "viena": "vienna",
    // Bélgica
    "bruxelas": "brussels",
    // China
    "pequim": "beijing",
    // Dinamarca
    "copenhague": "copenhagen",
    // Egito
    "cairo": "cairo",
    // Espanha
    "madrid": "madrid",
    "sevilha": "seville",
    // Estados Unidos   
    "são francisco": "san francisco",
    "nova york": "new york",
    // Grécia
    "atenas": "athens",
    // Holanda
    "amsterdã": "amsterdam",
    // Hungria
    "budapeste": "budapest",
    // Índia
    "bombaim": "mumbai",
    "nova delhi": "new delhi",
    "calcutá": "kolkata",
    // Indonésia
    "jacarta": "jakarta",
    // Itália
    "roma": "rome",
    "milão": "milan",
    "florença": "florence",
    "nápoles": "naples",
    "veneza": "venice",
    // Japão
    "tóquio": "tokyo",
    // Polônia
    "varsóvia": "warsaw",
    // República Tcheca
    "praga": "prague",
    // Reino Unido    
    "londres": "london",    
    // Rússia
    "são petersburgo": "saint petersburg",
    "moscou": "moscow",
    // Singapura
    "singapura": "singapore",
    // Suécia
    "estocolmo": "stockholm",
    // Suíça
    "zurique": "zurich",
    "genebra": "geneva",
    "basileia": "basel",
    // Turquia
    "istambul": "istanbul",
};

// 2. Função de normalização
export function normalizeCityName(city: string): string {
    if (!city || typeof city !== 'string') return city;

    const normalized = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return cityAliases[normalized] || city; 
}

// 3. Adiciona cache se a função for chamada muitas vezes
const cache = new Map<string, string>();

export function normalizeCityNameCached(city: string): string {
    if (!city) return city;
    
    if (cache.has(city)) {
        return cache.get(city)!;
    }
    
    const normalized = city
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    
    const result = cityAliases[normalized] || city;
    cache.set(city, result);
    
    return result;
}
