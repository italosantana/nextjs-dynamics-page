import Link from 'next/link';

export default function Products(){
	return(
		<div>
			<Link href="category/product">
				<a>Navegar para os produtos</a>
			</Link>

				<h1>Produtos</h1>
		</div>
	);
}