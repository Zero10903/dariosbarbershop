// ? Import IServiceData interface
import type { IServiceData } from './IServiceData';

// ? Create an array of objects with the IServiceData interface
const ServiceData: IServiceData[] = [
	{
		id: 1,
		name: 'Corte de adulto',
		price: 5000,
	},
	{
		id: 2,
		name: 'Corte de niño',
		price: 4500,
	},
	{
		id: 3,
		name: 'Perfilado de barba',
		price: 4000,
	},
	{
		id: 4,
		name: 'Perfilado de cejas',
		price: 3500,
	},
];

export default ServiceData;
