import Link from 'next/link';

export default function Index(){
	return (
		<div>
			<h1>Página principal</h1>

			<Link href="/products">
				<a>Navegar para página de produtos</a>
			</Link>	
			<p>Note-se que ao realizar dessa forma, redirecionando o link estático, será rederizado apenas o nó do DOM onde foi utilizado e não o body inteiro</p>
		</div>
	);
}