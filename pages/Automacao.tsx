import React from 'react';

type DownloadCardProps = {
	title: string;
	description: string;
	href: string;
	tone: 'blue' | 'green' | 'amber';
	key?: React.Key;
};

const DownloadCard: React.FC<DownloadCardProps> = ({
	title,
	description,
	href,
	tone,
}) => {
	const tones = {
		blue: 'from-blue-600/90 to-blue-500/80 border-blue-500/40 shadow-blue-500/20',
		green: 'from-emerald-600/90 to-emerald-500/80 border-emerald-500/40 shadow-emerald-500/20',
		amber: 'from-amber-600/90 to-amber-500/80 border-amber-500/40 shadow-amber-500/20',
	} as const;

	return (
		<a
			href={href}
			className={`group relative block rounded-2xl p-6 bg-gradient-to-br ${tones[tone]} text-white border shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl`}
			target="_blank"
			rel="noreferrer"
		>
			<div className="flex items-start gap-4">
				<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 border border-white/20 shadow-inner font-bold">
					<span className="text-base" aria-hidden>
						{tone === 'blue'
							? 'WIN'
							: tone === 'green'
							? 'VAL'
							: 'BETA'}
					</span>
				</div>
				<div>
					<h3 className="text-lg font-semibold leading-tight">
						{title}
					</h3>
					<p className="mt-2 text-sm text-white/80 leading-relaxed">
						{description}
					</p>
					<span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
						Baixar agora
						<svg
							className="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 12h14M13 5l7 7-7 7"
							/>
						</svg>
					</span>
				</div>
			</div>
			<div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
		</a>
	);
};

export const Automacao: React.FC = () => {
	const downloads = [
		{
			title: 'Versão Oficial (Android)',
			description: 'Aplicativo principal homologado para produção.',
			href: 'https://app.tabletcloud.com.br/android/oficial/app.apk',
			tone: 'blue' as const,
		},
		{
			title: 'Versão Beta (Android)',
			description:
				'Canal de testes para novidades e correções antecipadas.',
			href: 'https://app.tabletcloud.com.br/android/beta/app.apk',
			tone: 'amber' as const,
		},
		{
			title: 'Validador de Tickets',
			description:
				'Ferramenta de validação para controle de acesso e eventos.',
			href: 'https://app.tabletcloud.com.br/android/oficial/validador.apk',
			tone: 'green' as const,
		},
	];

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24">
			<div
				className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.15),transparent_30%),radial-gradient(circle_at_60%_70%,rgba(251,191,36,0.12),transparent_35%)]"
				aria-hidden
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold backdrop-blur">
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
							<img
								src="img/logo.png"
								alt="UAI PDV"
								className="h-7 w-7 object-contain"
								onError={(e) => {
									e.currentTarget.src =
										'https://placehold.co/80x80?text=UAI';
									e.currentTarget.onerror = null;
								}}
							/>
						</span>
						<span>UAI PDV Automação</span>
					</div>
					<h1 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
						Baixe a versão desejada do seu aplicativo
					</h1>
					<p className="mt-4 text-lg text-white/80">
						Downloads diretos das builds oficiais e beta com o
						validador para eventos.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					{downloads.map((item) => (
						<DownloadCard
							key={item.title}
							title={item.title}
							description={item.description}
							href={item.href}
							tone={item.tone}
						/>
					))}
				</div>

				<div className="mt-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-sm text-white/70 max-w-4xl mx-auto">
					<p className="font-semibold text-white">Dica</p>
					<p className="mt-2 leading-relaxed">
						Ative a instalação de fontes confiáveis no Android caso
						seja solicitado. Todos os links são hospedados em
						domínios oficiais da UAI PDV / TabletCloud.
					</p>
				</div>
			</div>
		</section>
	);
};
