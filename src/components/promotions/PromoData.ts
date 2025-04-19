import type { IPromoData } from './IPromoData';

const PromoData: IPromoData[] = [
	{
		id: 1,
		name: 'Corte gratis',
		description:
			'Luego de realizarse 5 cortes, el 6to es gratis. Unicamente con tarjeta de fidelidad.',
	},
	{
		id: 2,
		name: 'Mate gratis',
		description:
			'Puedes disfrutar de un mate gratis mientras esperas tu turno o mientras te cortas el cabello.',
	},
	{
		id: 3,
		name: 'Música a gusto',
		description:
			'Puedes elegir la música que desees escuchar mientras te cortas el cabello.',
	},
	{
		id: 4,
		name: 'Corte + Barba',
		description:
			'Corte de cabello + perfilado de barba (debe ser al mismo cliente): $8.000.',
	},
];

export default PromoData;
