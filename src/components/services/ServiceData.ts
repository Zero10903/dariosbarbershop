// ? Import IServiceData interface
import type { IServiceData } from './IServiceData';

// ? Create an array of objects with the IServiceData interface
const ServiceData: IServiceData[] = [
	{
		id: 1,
		name: 'Corte de cabello (adulto)',
		price: 5500,
	},
	{
		id: 2,
		name: 'Corte de cabello (niño)',
		price: 5000,
	},
	{
		id: 3,
		name: 'Perfilado de barba',
		price: 4000,
	},
	{
		id: 4,
		name: 'Perfilado de cejas',
		price: 3000,
	},
];

export default ServiceData;
