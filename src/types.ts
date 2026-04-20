export type Day = 'Minggu' | 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
export type Pasaran = 'Legi' | 'Pahing' | 'Pon' | 'Wage' | 'Kliwon';

export interface PrimbonData {
  day: Day;
  pasaran: Pasaran;
  neptu: number;
  character: string;
  fortune: string;
  unluckyDays: string;
  compatibleMatches: string;
  goodJobs: string;
}

export const DAY_NEPTU: Record<Day, number> = {
  'Minggu': 5,
  'Senin': 4,
  'Selasa': 3,
  'Rabu': 7,
  'Kamis': 8,
  'Jumat': 6,
  'Sabtu': 9,
};

export const PASARAN_NEPTU: Record<Pasaran, number> = {
  'Legi': 5,
  'Pahing': 9,
  'Pon': 7,
  'Wage': 4,
  'Kliwon': 8,
};

export const WETON_INTERPRETATIONS: Record<number, { character: string; fortune: string; unluckyDays: string; compatibleMatches: string; goodJobs: string }> = {
  7: { 
    character: "Pendiam, rendah hati, dan suka menolong.", 
    fortune: "Rezeki lancar jika tekun bekerja.",
    unluckyDays: "Selasa Kliwon & Sabtu Wage",
    compatibleMatches: "Neptu 7, 12, atau 17",
    goodJobs: "Petani, peternak, atau pengajar."
  },
  8: { 
    character: "Berani, keras kepala, tapi setia.", 
    fortune: "Akan sukses di usia matang.",
    unluckyDays: "Senin Pon & Jumat Legi",
    compatibleMatches: "Neptu 11 atau 16",
    goodJobs: "Prajurit, polisi, atau buruh bangunan."
  },
  9: { 
    character: "Lincah, cerdas, dan pandai bergaul.", 
    fortune: "Banyak keberuntungan tak terduga.",
    unluckyDays: "Minggu Pahing & Rabu Kliwon",
    compatibleMatches: "Neptu 9, 14, atau 10",
    goodJobs: "Pedagang, seniman, atau humas."
  },
  10: { 
    character: "Sabar, teliti, dan berwibawa.", 
    fortune: "Cocok menjadi pemimpin atau pengusaha.",
    unluckyDays: "Selasa Pon & Sabtu Kliwon",
    compatibleMatches: "Neptu 9 atau 14",
    goodJobs: "Pegawai negeri, guru, atau arsitek."
  },
  11: { 
    character: "Dermawan, jujur, namun terkadang emosional.", 
    fortune: "Rezeki mengalir seperti air.",
    unluckyDays: "Senin Kliwon & Jumat Pahing",
    compatibleMatches: "Neptu 8, 13, atau 18",
    goodJobs: "Seniman, musisi, atau desainer."
  },
  12: { 
    character: "Cerdas, berjiwa seni, dan romantis.", 
    fortune: "Sukses di bidang kreatif.",
    unluckyDays: "Minggu Legi & Kamis Wage",
    compatibleMatches: "Neptu 7, 12, atau 17",
    goodJobs: "Penulis, wartawan, atau diplomat."
  },
  13: { 
    character: "Kuat, mandiri, dan pantang menyerah.", 
    fortune: "Kehidupan stabil dan mapan.",
    unluckyDays: "Selasa Wage & Sabtu Legi",
    compatibleMatches: "Neptu 11 atau 16",
    goodJobs: "Pengusaha, kontraktor, atau teknisi."
  },
  14: { 
    character: "Bijaksana, tenang, dan dihormati.", 
    fortune: "Menjadi panutan banyak orang.",
    unluckyDays: "Rabu Pon & Minggu Kliwon",
    compatibleMatches: "Neptu 10 atau 15",
    goodJobs: "Hakim, pengacara, atau penasihat."
  },
  15: { 
    character: "Tegas, disiplin, dan berani mengambil risiko.", 
    fortune: "Kejayaan menanti di masa depan.",
    unluckyDays: "Kamis Pahing & Senin Wage",
    compatibleMatches: "Neptu 9 atau 14",
    goodJobs: "Pemimpin militer, manajer, atau atlet."
  },
  16: { 
    character: "Sangat sabar, pemaaf, dan berhati mulia.", 
    fortune: "Hidup penuh kedamaian dan berkah.",
    unluckyDays: "Sabtu Pon & Selasa Kliwon",
    compatibleMatches: "Neptu 8, 13, atau 18",
    goodJobs: "Dokter, perawat, atau pemuka agama."
  },
  17: { 
    character: "Ambisius, visioner, dan pekerja keras.", 
    fortune: "Potensi menjadi orang besar.",
    unluckyDays: "Kamis Kliwon & Minggu Wage",
    compatibleMatches: "Neptu 7, 12, atau 17",
    goodJobs: "Politikus, direktur, atau ilmuwan."
  },
  18: { 
    character: "Sangat berwibawa, disegani, dan bijak.", 
    fortune: "Keberuntungan tertinggi dalam hidup.",
    unluckyDays: "Sabtu Pahing & Rabu Legi",
    compatibleMatches: "Neptu 11 atau 16",
    goodJobs: "Raja, menteri, atau tokoh masyarakat."
  },
};
