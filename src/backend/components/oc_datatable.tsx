
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function OC_Datatable({search_styles=null}) {
	const dataTableValues = [
		{ id: 1, name: 'Apple Watch', price: '₦350,000', category: 'Accessories', quantity: 7, rating: 5 },
		{ id: 2, name: 'MacBook Pro', price: '₦1,200,000', category: 'Laptops', quantity: 3, rating: 4 },
		{ id: 3, name: 'iPhone X', price: '₦500,000', category: 'Smartphones', quantity: 10, rating: 4.5 },
		{ id: 4, name: 'iPad Pro', price: '₦700,000', category: 'Tablets', quantity: 5, rating: 4 },
		{ id: 5, name: 'Beats Headphones', price: '₦150,000', category: 'Accessories', quantity: 20, rating: 3.5 }
	];
	
	return (
		<DataTable value={dataTableValues} tableStyle={{ minWidth: '50rem' }}>
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
		</DataTable>

	)
}
