export const db ={
	farmaci:[
		{"nome":"Paracetamolo",
		"formati":[
			{
				"tipo":"Supposte Neonati da 62,5 mg",
				"dosaggi":[
					"Bambini di peso compreso tra 3,2 e 5 kg (approssimativamente tra la nascita ed i 2 mesi): 1 supposta alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
				]
			},
			{
				"tipo":"Supposte Prima Infanzia da 125 mg",
				"dosaggi":[
					"Bambini di peso compreso tra 6 e 7 kg (approssimativamente tra i 3 ed i 5 mesi): 1 supposta alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
					"Bambini di peso compreso tra 7 e 10 kg (approssimativamente tra i 6 ed i 19 mesi): 1 supposta alla volta, da ripetere se necessario dopo 4-6 ore, senza superare le 5 somministrazioni al giorno.",
					"Bambini di peso compreso tra 11 e 12 kg (approssimativamente tra i 20 ed i 29 mesi): 1 supposta alla volta, da ripetere se necessario dopo 4 ore, senza superare le 6 somministrazioni al giorno."
				]
			},
			{
				"tipo":"Supposte Bambini da 250 mg.",
				"dosaggi":[
					"Bambini di peso compreso tra 11 e 12 kg (approssimativamente tra i 20 ed i 29 mesi): 1 supposta alla volta, da ripetere se necessario dopo 8 ore; senza superare le 3 somministrazioni al giorno.",
					"Bambini di peso compreso tra 13 e 20 kg (approssimativamente tra i 30 mesi ed inferiore a 6,5 anni): 1 supposta alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
				]			
			},
			{
				"tipo":"Supposte Bambini da 500 mg.",
				"dosaggi":[
					"Bambini di peso compreso tra 21 e 25 kg (approssimativamente tra i 6,5 ed inferiore a 8 anni): 1 supposta alla volta, da ripetere se necessario dopo 8 ore, senza superare le 3 somministrazioni al giorno.",
					"Bambini di peso compreso tra 26 e 40 kg (approssimativamente tra gli 8 e gli 11 anni): 1 supposta alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
				]		
			},
			{
				"tipo":"Granulato effervescente da 125mg in bustine",
				"dosaggi":[
					"Bambini di peso compreso tra 7 e 10 kg (approssimativamente tra i 6 ed i 19 mesi): 1 bustina alla volta, da ripetere se necessario dopo 6 ore senza superare le 4 somministrazioni al giorno.",
					"Bambini di peso compreso tra 11 e 12 kg (approssimativamente tra i 20 ed i 29 mesi): 1 bustina alla volta, da ripetere se necessario dopo 4 ore, senza superare le 6 somministrazioni al giorno.",
					"Bambini di peso compreso tra 13 e 20 kg (approssimativamente tra i 30 mesi ed inferiore a 6,5 anni): 2 bustine alla volta (corrispondenti a 250 mg di paracetamolo), da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
					"Bambini di peso compreso tra 21 e 25 kg (approssimativamente tra i 6,5 ed inferiore a 8 anni): 2 bustine alla volta (corrispondenti a 250 mg di paracetamolo), da ripetere se necessario dopo 4 ore, senza superare le 6 somministrazioni al giorno."
				]		
			},
			{
				"tipo":"Granulato effervescente da 500 mg in bustine",
				"dosaggi":[
					"Bambini di peso compreso tra 26 e 40 kg (approssimativamente tra gli 8 e gli 11 anni): 1 bustina alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno.",
				]
			},
			{
				"tipo":"Compresse da 500 mg",
				"dosaggi":[
					"Bambini di peso compreso tra 21 e 25kg (approssimativamente tra i 6,5 ed inferiore a 8 anni): ½ compressa alla volta, da ripetere se necessario dopo 4 ore, senza superare le 6 somministrazioni al giorno (3 compresse).",
					"Bambini di peso compreso tra 26 e 40 kg (approssimativamente tra gli 8 egli 11 anni): 1 compressa alla volta, da ripetere se necessario dopo 6 ore, senza superare le 4 somministrazioni al giorno."
				]
			},
			{
				"tipo":"Sciroppo (Acetamol 25mg/ml o Tachipirina 120mg/5ml)",
				"dosaggi":[
					"Per la febbre: la dose antipiretica è di 10 - 15 mg/kg",
					"Per il dolore: la dose efficace è superiore del 50% circa, quindi 15-20 mg/kg."
				]
			}
		]
		},
		{
			"nome":"Ibuprofene",
			"formati":[
				{"tipo":"Sospensione orale 100mg/ 5ml (1 ml = 20 mg)",
					"dosaggi":[
						"La dose giornaliera raccomandata è di 20-30 mg/kg di peso corporeo, suddivisa 3 volte al giorno con intervalli di 6-8 ore. Siringa e cucchiaino: la tacca da 2,5 ml corrisponde a 50 mg di ibuprofene e la tacca da 5 ml corrisponde a 100 mg.",
						"Peso da 5-6 kg; età indicativa: 3 - 6 mesi; dose singola in ml: 2,5 ml; numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
						"Peso da 7 kg; età indicativa: 6 -12 mesi; dose singola in ml: 2,5 ml; numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
						"Peso da 10 kg; età indicativa: 1 -3 anni; dose singola in ml: 5 ml; numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
						"Peso da 15 kg; età indicativa: 4- 6 anni; dose singola in ml: 7, 5ml (5 ml + 2,5 ml); numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
						"Peso da 20 kg, età indicativa: 7-9 anni; dose singola in ml: 10 ml; numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
						"Peso da 28 a 43 kg; età indicativa: 10-12 anni; dose singola in ml:15 ml; numero massimo di somministrazioni/giorno: 3 nelle 24 ore.",
					]
				}
			]
		}
	]
}
