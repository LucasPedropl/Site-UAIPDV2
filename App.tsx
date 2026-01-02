import React, { useEffect, useState } from 'react';
import { content } from './data/content';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Mobilidade } from './pages/Mobilidade';
import { Solutions } from './pages/Solutions';
import { Videos } from './pages/Videos';
import { Delivery } from './pages/Delivery';
import { SegmentoBarRestaurante } from './pages/SegmentoBarRestaurante';
import { SegmentoDistribuidora } from './pages/SegmentoDistribuidora';
import { SegmentoHortifruti } from './pages/SegmentoHortifruti';
import { SegmentoEventos } from './pages/SegmentoEventos';
import { Automacao } from './pages/Automacao';
import { UaiMais } from './pages/UaiMais';

export default function App() {
	const validPages = [
		'home',
		'mobilidade',
		'solutions',
		'videos',
		'delivery',
		'segmento-bar-restaurante',
		'segmento-distribuidora',
		'segmento-hortifruti',
		'segmento-eventos-festas',
		'automacao',
		'uai-mais',
	];

	const normalizePage = (value?: string) => {
		const page = (value || '').replace(/^#/, '').toLowerCase();
		return validPages.includes(page) ? page : 'home';
	};

	const [currentPage, setCurrentPage] = useState(() =>
		normalizePage(window.location.hash)
	);

	useEffect(() => {
		const syncFromHash = () => {
			const page = normalizePage(window.location.hash);
			setCurrentPage(page);
		};

		// Ensure the URL reflects the initial page so each view has a shareable hash.
		const initialPage = normalizePage(window.location.hash);
		if (window.location.hash !== `#${initialPage}`) {
			window.location.hash = initialPage;
		}

		window.addEventListener('hashchange', syncFromHash);
		return () => window.removeEventListener('hashchange', syncFromHash);
	}, []);

	const handleNavigate = (page: string) => {
		const targetPage = normalizePage(page);
		setCurrentPage(targetPage);
		if (window.location.hash !== `#${targetPage}`) {
			window.location.hash = targetPage;
		}
	};

	const renderPage = () => {
		switch (currentPage) {
			case 'home':
				return <Home content={content.home} />;
			case 'mobilidade':
				return <Mobilidade content={content.mobilidade} />;
			case 'solutions':
				return <Solutions content={content.solutions} />;
			case 'videos':
				return <Videos content={content.videos} />;
			case 'delivery':
				return <Delivery content={content.delivery} />;
			case 'segmento-bar-restaurante':
				return (
					<SegmentoBarRestaurante
						content={content.segmentoBarRestaurante}
					/>
				);
			case 'segmento-distribuidora':
				return (
					<SegmentoDistribuidora
						content={content.segmentoDistribuidora}
					/>
				);
			case 'segmento-hortifruti':
				return (
					<SegmentoHortifruti content={content.segmentoHortifruti} />
				);
			case 'segmento-eventos-festas':
				return <SegmentoEventos content={content.segmentoEventos} />;
			case 'automacao':
				return <Automacao />;
			case 'uai-mais':
				return <UaiMais />;
			default:
				return <Home content={content.home} />;
		}
	};

	return (
		<Layout onNavigate={handleNavigate} currentPage={currentPage}>
			{renderPage()}
		</Layout>
	);
}
