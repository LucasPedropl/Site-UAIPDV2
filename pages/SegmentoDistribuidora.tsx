import React, { useEffect, useRef, useState } from 'react';

const useFadeIn = () => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			});
		});
		const current = domRef.current;
		if (current) observer.observe(current);
		return () => {
			if (current) observer.disconnect();
		};
	}, []);

	return { ref: domRef, isVisible };
};

const FadeSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
	children,
	delay = 0,
}) => {
	const { ref, isVisible } = useFadeIn();
	return (
		<div
			ref={ref}
			className={`transition-all duration-700 transform ${
				isVisible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-8'
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
};

export const SegmentoDistribuidora = ({ content }: { content: any }) => {
	const resolveAssetPath = (path: string) => {
		if (!path) return '';
		if (path.startsWith('http')) return path;
		const cleaned = path.replace(/^\/+/, '');
        const meta = import.meta as any;
		const base =
			meta && meta.env && meta.env.BASE_URL
				? meta.env.BASE_URL
				: '/';
		return `${base}${cleaned}`;
	};

	const pcBadges = [
		'Homologação fiscal e TEF',
		'Instalação assistida',
		'Suporte remoto incluso',
	];

	const pcHighlights = [
		{
			title: 'Kit caixa completo',
			desc: 'Computador, monitor LED 19 e atendimento omnichannel com meios de pagamento integrados sem dupla digitação.',
		},
		{
			title: 'Performance garantida',
			desc: 'Windows 11 Pro, Intel Core i5, 8GB RAM e SSD para emissão fiscal, TEF e retaguarda simultâneos.',
		},
		{
			title: 'Operação contínua',
			desc: 'Configuração otimizada para balcão, rota de entregas, cadastro de clientes e emissão de boletos/links.',
		},
	];

	const posBadges = [
		'TEF homologado',
		'Conta digital sem custo',
		'Link de pagamento',
	];

	const posHighlights = [
		{
			title: 'POS Android P2',
			desc: 'Processador dual core, impressora térmica e autonomia para fila rápida e entregas.',
		},
		{
			title: 'Venda em qualquer lugar',
			desc: 'Pagamentos presenciais, links online e integração direta ao sistema sem redigitar valores.',
		},
		{
			title: 'Suporte e atualização',
			desc: 'Configuração assistida, suporte remoto e atualização contínua do aplicativo UAI PDV.',
		},
	];

	const pcImages = (content.equipment.pc.cards || [])
		.filter((c: any) => c.type === 'image')
		.map((c: any) => resolveAssetPath(c.img));
	const [pcImageIndex, setPcImageIndex] = useState(0);

	const posImages = (content.equipment.pos.cards || [])
		.filter((c: any) => c.type === 'image')
		.map((c: any) => resolveAssetPath(c.img));
	// Removed logic for posTextCards as user requested to remove them
	const [posImageIndex, setPosImageIndex] = useState(0);

	useEffect(() => {
		if (pcImages.length > 1) {
			const timer = setInterval(() => {
				setPcImageIndex((prev) => (prev + 1) % pcImages.length);
			}, 3500);
			return () => clearInterval(timer);
		}
	}, [pcImages.length]);

	useEffect(() => {
		if (posImages.length > 1) {
			const timer = setInterval(() => {
				setPosImageIndex((prev) => (prev + 1) % posImages.length);
			}, 3200);
			return () => clearInterval(timer);
		}
	}, [posImages.length]);

	return (
		<>
			{/* Hero Section */}
			<section className="relative isolate overflow-hidden bg-gray-900 text-white">
				<img
					src={content.hero.bgImage}
					alt="Operação de distribuidora"
					className="absolute inset-0 h-full w-full object-cover"
					onError={(e) => {
						e.currentTarget.src =
							'https://placehold.co/1920x1080?text=Distribuidora+Hero';
						e.currentTarget.onerror = null;
					}}
				/>
				<div className="absolute inset-0 bg-black/70"></div>
				<div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
					<p className="text-xs uppercase tracking-[0.35em] text-white/70">
						{content.hero.kicker}
					</p>
					<h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight max-w-3xl">
						{content.hero.title}
					</h1>
					<p className="mt-6 max-w-2xl text-lg text-white/80">
						{content.hero.subtitle}
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-semibold shadow-lg shadow-black/30 hover:bg-gray-100 transition"
						>
							{content.hero.ctaPrimary}
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/30 text-white font-semibold hover:bg-white/10 transition"
						>
							{content.hero.ctaSecondary}
						</a>
					</div>
					<dl className="mt-12 grid gap-6 sm:grid-cols-3 text-white/80">
						{content.hero.stats.map((stat: any, idx: number) => (
							<div key={idx}>
								<dt className="text-sm uppercase tracking-widest text-white/60">
									{stat.label}
								</dt>
								<dd className="mt-2 text-2xl font-semibold">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* Hybrid System Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl">
						<p className="text-xs uppercase tracking-[0.35em] text-brand-blue">
							{content.hybrid.kicker}
						</p>
						<h2 className="mt-4 text-3xl font-semibold text-gray-900">
							{content.hybrid.title}
						</h2>
						<p className="mt-4 text-gray-600">
							{content.hybrid.description}
						</p>
					</div>
				</div>
			</section>

			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-2">
						{content.hybrid.cards.map((card: any, idx: number) => (
							<FadeSection key={idx} delay={idx * 100}>
								<article className="rounded-3xl bg-white p-8 shadow-lg shadow-gray-200/70 h-full">
									<img
										src={card.image}
										alt={card.title}
										className="w-full rounded-2xl border border-gray-100"
										onError={(e) => {
											e.currentTarget.src =
												'https://placehold.co/600x400?text=Sistema+Hibrido';
											e.currentTarget.onerror = null;
										}}
									/>
									<h3 className="mt-6 text-2xl font-semibold text-gray-900">
										{card.title}
									</h3>
									<p className="mt-4 text-gray-600">
										{card.description}
									</p>
									<a
										href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185"
										target="_blank"
										rel="noreferrer"
										className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition"
									>
										{card.cta}
									</a>
								</article>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="rounded-3xl bg-gray-900 text-white p-10 shadow-2xl">
						<p className="text-xs uppercase tracking-[0.35em] text-white/60">
							{content.pricing.kicker}
						</p>
						<h2 className="mt-6 text-3xl font-semibold">
							{content.pricing.title}
						</h2>
						<p className="mt-4 text-white/80 max-w-3xl">
							{content.pricing.description}
						</p>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2">
						{content.features.map((feature: any, idx: number) => (
							<FadeSection key={idx} delay={idx * 50}>
								<div className="rounded-3xl bg-white p-8 shadow h-full">
									<p className="text-sm font-semibold text-brand-blue">
										{feature.number}
									</p>
									<h3 className="mt-3 text-2xl font-semibold text-gray-900">
										{feature.title}
									</h3>
									<p className="mt-2 text-gray-600">
										{feature.description}
									</p>
								</div>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* Parallax Background */}
			<section
				className="relative isolate h-64 md:h-80 bg-fixed bg-center bg-cover"
				style={{
					backgroundImage: `url(${content.parallaxBg})`,
				}}
			>
				<div className="absolute inset-0 bg-black/20"></div>
			</section>

			{/* Segments Grid */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-3">
						{content.segments.map((segment: any, idx: number) => (
							<FadeSection key={idx} delay={idx * 100}>
								<article className="rounded-3xl border border-gray-200 overflow-hidden h-full flex flex-col">
									<img
										src={segment.image}
										alt={segment.title}
										className="h-64 w-full object-cover"
										onError={(e) => {
											e.currentTarget.src =
												'https://placehold.co/400x300?text=Segmento';
											e.currentTarget.onerror = null;
										}}
									/>
									<div className="p-6 text-center flex-1">
										<h3 className="text-xl font-semibold text-gray-900">
											{segment.title}
										</h3>
										<p className="mt-2 text-gray-600">
											{segment.description}
										</p>
									</div>
								</article>
							</FadeSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA Band */}
			<section className="py-16 bg-brand-blue text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div>
						<h2 className="text-3xl font-semibold">
							{content.ctaBand.title}
						</h2>
					</div>
					<a
						href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-brand-blue font-semibold hover:bg-gray-100 transition"
					>
						{content.ctaBand.cta}
					</a>
				</div>
			</section>

			{/* Payment Integration */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl">
						<p className="text-xs uppercase tracking-[0.35em] text-brand-blue">
							{content.payment.kicker}
						</p>
					</div>
					<div className="mt-10 space-y-4">
						{content.payment.accordions.map(
							(acc: any, idx: number) => (
								<details
									key={idx}
									className="rounded-3xl border border-gray-200 bg-white p-6 group"
									open={idx === 0}
								>
									<summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 outline-none marker:content-none list-none">
										<span>{acc.title}</span>
										<span className="text-brand-blue transform group-open:rotate-180 transition-transform">
											&#x25BC;
										</span>
									</summary>
									<p className="mt-4 text-gray-600">
										{acc.description}
									</p>
								</details>
							)
						)}
					</div>
				</div>
			</section>

			{/* Equipment - Mini PDV */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-semibold text-gray-900 mb-10">
						{content.equipment.miniPdv.title}
					</h2>
					<div className="grid gap-6 lg:grid-cols-3">
						{content.equipment.miniPdv.cards.map(
							(card: any, idx: number) => (
								<div
									key={idx}
									className="rounded-3xl bg-white p-8 shadow h-full flex flex-col"
								>
									<h3 className="text-xl font-semibold text-gray-900">
										{card.title}
									</h3>
									<p className="mt-2 text-gray-600 flex-1">
										{card.desc}
									</p>
									<img
										src={card.img}
										alt={card.title}
										className="mt-6 h-64 w-full rounded-2xl object-cover"
										onError={(e) => {
											e.currentTarget.src =
												'https://placehold.co/300x400?text=Mini+PDV';
											e.currentTarget.onerror = null;
										}}
									/>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Equipment - PC */}
			<section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-12">
						<p className="text-xs uppercase tracking-[0.35em] text-brand-blue mb-4">
							Equipamentos
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
							Equipamentos Homologados
						</h2>
						<p className="mt-4 text-gray-600">
							Soluções completas de hardware testadas, montadas e
							configuradas para balcão, rota de entrega e operação
							omnichannel.
						</p>
						<div className="mt-6 flex flex-wrap justify-center gap-3">
							{pcBadges.map((badge, idx) => (
								<span
									key={idx}
									className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm"
								>
									<span className="h-2 w-2 rounded-full bg-brand-blue"></span>
									{badge}
								</span>
							))}
						</div>
					</div>

					{/* Layout Change: Changed from [1fr_1fr] to 2 columns for better responsiveness and sizing */}
					<div className="grid gap-10 lg:grid-cols-2 items-start">
						<div className="rounded-3xl bg-white shadow-xl border border-blue-100/80 p-8 lg:sticky lg:top-24">
							<p className="text-sm font-semibold text-brand-blue">
								Kit pronto para uso
							</p>
							<h3 className="mt-3 text-2xl font-bold text-gray-900">
								Do pedido ao recebimento, sem fricção
							</h3>
							<p className="mt-3 text-gray-600 leading-relaxed">
								Montagem homologada com TEF integrado, Windows
								11 Pro otimizado e suporte remoto. Indicamos o
								hardware certo para acelerar o caixa e evitar
								gargalos.
							</p>

							<div className="mt-6 space-y-4">
								{pcHighlights.map((item, idx) => (
									<div
										key={idx}
										className="flex gap-3 items-start"
									>
										<div className="mt-1 h-2 w-2 rounded-full bg-brand-blue"></div>
										<div>
											<p className="text-sm font-semibold text-gray-900">
												{item.title}
											</p>
											<p className="text-gray-600 leading-relaxed">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Fiscal + TEF integrados
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Instalação assistida
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Monitor 19&#34; + SSD
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Suporte e atualizações
								</div>
							</div>

							<div className="mt-6 flex flex-wrap gap-2">
								{[
									'Balcão',
									'Rotas de entrega',
									'Aplicativo próprio',
									'iFood/Marketplaces',
								].map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-gray-900 text-white text-xs font-semibold px-3 py-2"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
						{/* Layout Change: Reduced max-w and ensured w-full to prevent overlapping with the text column */}
						<div className="relative h-[360px] sm:h-[420px] lg:h-[460px] mx-auto w-full max-w-full lg:max-w-[500px] flex items-center justify-center">
							<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl border border-blue-100/60"></div>
							{pcImages.map((img: string, idx: number) => {
								const isActive = idx === pcImageIndex;
								const isPrev =
									idx ===
									(pcImageIndex - 1 + pcImages.length) %
										pcImages.length;
								const isNext =
									idx ===
									(pcImageIndex + 1) % pcImages.length;

								let zIndex = 5;
								let scale = 0.88;
								let translateX = '0';
								let opacity = 0;

								if (isActive) {
									zIndex = 30;
									scale = 1;
									opacity = 1;
								} else if (isPrev) {
									zIndex = 20;
									scale = 0.94;
									translateX = '-30%';
									opacity = 0.6;
								} else if (isNext) {
									zIndex = 20;
									scale = 0.94;
									translateX = '30%';
									opacity = 0.6;
								}

								return (
									<img
										key={idx}
										src={img}
										alt={`PC Homologado ${idx + 1}`}
										className="absolute inset-6 sm:inset-8 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] max-h-[360px] sm:max-h-[420px] object-contain rounded-[24px] shadow-2xl transition-all duration-700 ease-in-out"
										style={{
											zIndex,
											transform: `translateX(${translateX}) scale(${scale})`,
											opacity,
										}}
										onError={(e) => {
											e.currentTarget.src =
												'https://placehold.co/400x600?text=PC';
											e.currentTarget.onerror = null;
										}}
									/>
								);
							})}
							<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-40">
								{pcImages.map((_: any, idx: number) => (
									<button
										key={idx}
										onClick={() => setPcImageIndex(idx)}
										className={`w-2 h-2 rounded-full transition-all ${
											idx === pcImageIndex
												? 'bg-brand-blue w-6'
												: 'bg-gray-300 hover:bg-gray-400'
										}`}
										aria-label={`Ver PC ${idx + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Equipment - POS */}
			<section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-12">
						<p className="text-xs uppercase tracking-[0.35em] text-brand-blue mb-4">
							Pagamentos
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
							{content.equipment.pos.title}
						</h2>
						<p className="mt-4 text-gray-600">
							POS Android pronto para TEF, link de pagamento e
							atendimento móvel integrado ao sistema.
						</p>
						<div className="mt-6 flex flex-wrap justify-center gap-3">
							{posBadges.map((badge, idx) => (
								<span
									key={idx}
									className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm"
								>
									<span className="h-2 w-2 rounded-full bg-brand-blue"></span>
									{badge}
								</span>
							))}
						</div>
					</div>

					{/* Layout Change: Changed from [1fr_1fr] to 2 columns for better responsiveness and sizing */}
					<div className="grid gap-10 lg:grid-cols-2 items-start">
						<div className="rounded-3xl bg-white shadow-xl border border-blue-100/80 p-8 lg:sticky lg:top-24">
							<p className="text-sm font-semibold text-brand-blue">
								Mobilidade para cobrar e entregar
							</p>
							<h3 className="mt-3 text-2xl font-bold text-gray-900">
								Receba no balcão, na mesa ou na rota
							</h3>
							<p className="mt-3 text-gray-600 leading-relaxed">
								POS Android configurado com o app UAI PDV:
								imprime na hora, envia links e atualiza o pedido
								automaticamente sem redigitar valores.
							</p>
							<div className="mt-6 space-y-4">
								{posHighlights.map((item, idx) => (
									<div
										key={idx}
										className="flex gap-3 items-start"
									>
										<div className="mt-1 h-2 w-2 rounded-full bg-brand-blue"></div>
										<div>
											<p className="text-sm font-semibold text-gray-900">
												{item.title}
											</p>
											<p className="text-gray-600 leading-relaxed">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Impressora térmica
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Processador dual core
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Conta digital inclusa
								</div>
								<div className="rounded-2xl bg-blue-50 text-blue-900 px-4 py-3 text-sm font-semibold">
									Suporte remoto
								</div>
							</div>

							<div className="mt-6 flex flex-wrap gap-2">
								{[
									'Balcão',
									'Entregas',
									'Pedidos por app',
									'Link de pagamento',
								].map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-gray-900 text-white text-xs font-semibold px-3 py-2"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
						<div className="space-y-6">
							{/* Layout Change: Reduced max-w and ensured w-full to prevent overlapping with the text column */}
							<div className="relative h-[300px] sm:h-[360px] lg:h-[420px] mx-auto w-full max-w-full lg:max-w-[480px] flex items-center justify-center">
								<div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl border border-blue-100/60"></div>
								{posImages.map((img: string, idx: number) => {
									const isActive = idx === posImageIndex;
									const isPrev =
										idx ===
										(posImageIndex - 1 + posImages.length) %
											posImages.length;
									const isNext =
										idx ===
										(posImageIndex + 1) % posImages.length;

									let zIndex = 5;
									let scale = 0.9;
									let translateX = '0';
									let opacity = 0;

									if (isActive) {
										zIndex = 30;
										scale = 1;
										opacity = 1;
									} else if (isPrev) {
										zIndex = 20;
										scale = 0.94;
										translateX = '-26%';
										opacity = 0.6;
									} else if (isNext) {
										zIndex = 20;
										scale = 0.94;
										translateX = '26%';
										opacity = 0.6;
									}

									return (
										<img
											key={idx}
											src={img}
											alt={`POS ${idx + 1}`}
											className="absolute inset-6 sm:inset-8 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] max-h-[320px] sm:max-h-[360px] object-contain rounded-[20px] shadow-2xl transition-all duration-700 ease-in-out"
											style={{
												zIndex,
												transform: `translateX(${translateX}) scale(${scale})`,
												opacity,
											}}
											onError={(e) => {
												e.currentTarget.src =
													'https://placehold.co/300x360?text=POS';
												e.currentTarget.onerror = null;
											}}
										/>
									);
								})}
								<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-40">
									{posImages.map((_: any, idx: number) => (
										<button
											key={idx}
											onClick={() =>
												setPosImageIndex(idx)
											}
											className={`w-2 h-2 rounded-full transition-all ${
												idx === posImageIndex
													? 'bg-brand-blue w-6'
													: 'bg-gray-300 hover:bg-gray-400'
											}`}
											aria-label={`Ver POS ${idx + 1}`}
										/>
									))}
								</div>
							</div>
							
							{/* REMOVED: posTextCards logic to avoid empty cards at the bottom */}
						</div>
					</div>
				</div>
			</section>

			{/* Partners */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-semibold text-gray-900">
							{content.partners.title}
						</h2>
						<p className="mt-4 text-gray-600">
							{content.partners.description}
						</p>
					</div>
					<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{content.partners.logos.map(
							(logo: string, idx: number) => (
								<div
									key={idx}
									className="rounded-3xl border border-gray-200 p-6 flex items-center justify-center hover:border-brand-blue/30 transition-colors"
								>
									<img
										src={logo}
										alt={`Parceiro ${idx + 1}`}
										className="h-16 object-contain"
										onError={(e) => {
											e.currentTarget.src =
												'https://placehold.co/150x80?text=Logo';
											e.currentTarget.onerror = null;
										}}
									/>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</>
	);
};