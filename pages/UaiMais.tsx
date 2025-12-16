import React from 'react';

const Pill = ({ children }: { children: React.ReactNode }) => (
	<span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-4 py-2 text-sm font-semibold">
		{children}
	</span>
);

type DownloadButtonProps = {
	label: string;
	href: string;
	platform: 'windows' | 'android' | 'ios';
	key?: React.Key;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
	label,
	href,
	platform,
}) => {
	const icons: Record<typeof platform, string> = {
		windows: 'WIN',
		android: 'AND',
		ios: 'IOS',
	} as const;

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/90 px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
		>
			<div className="flex items-center gap-3 text-left">
				<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white text-xs font-semibold shadow-inner">
					{icons[platform]}
				</span>
				<div>
					<p className="text-base font-semibold text-gray-900 leading-tight">
						{label}
					</p>
					<p className="text-sm text-gray-500">Clique para baixar</p>
				</div>
			</div>
			<svg
				className="h-5 w-5 text-gray-400 group-hover:text-brand-blue transition"
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
		</a>
	);
};

export const UaiMais: React.FC = () => {
	const downloads = [
		{
			label: 'Link Oficial para Windows',
			href: 'https://navivendas.com.br/download/windows/whitelabel?appName=UAI%20PDV',
			platform: 'windows' as const,
		},
		{
			label: 'Disponível na Play Store',
			href: 'https://play.google.com/store/apps/details?id=br.com.uaipdv.uaipdv&hl=pt_BR',
			platform: 'android' as const,
		},
		{
			label: 'Disponível na App Store',
			href: 'https://apps.apple.com/br/app/pdv/id6443721199',
			platform: 'ios' as const,
		},
	];

	return (
		<section className="relative overflow-hidden bg-white">
			<div
				className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(52,211,153,0.1),transparent_45%)]"
				aria-hidden
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-32 pb-20">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm w-full sm:w-auto">
						<img
							src="img/logo.png"
							alt="UAI PDV"
							className="h-10 w-auto max-w-full"
							onError={(e) => {
								e.currentTarget.src =
									'https://placehold.co/160x50?text=UAI';
								e.currentTarget.onerror = null;
							}}
						/>
						<Pill>UAI PDV Mais</Pill>
					</div>
					<h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
						Baixe a versão desejada do seu aplicativo
					</h1>
					<p className="mt-4 text-lg text-gray-600">
						Links oficiais para desktop e lojas mobile. Escolha a
						plataforma e inicie a instalação com segurança.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					{downloads.map((item) => (
						<DownloadButton
							key={item.label}
							label={item.label}
							href={item.href}
							platform={item.platform}
						/>
					))}
				</div>

				<div className="mt-14 rounded-2xl bg-gray-900 text-white p-6 md:p-8 shadow-xl">
					<h2 className="text-xl font-semibold">Precisa de ajuda?</h2>
					<p className="mt-2 text-white/80 max-w-3xl">
						Caso encontre bloqueios de instalação, verifique as
						permissões do seu dispositivo ou entre em contato com o
						suporte UAI PDV.
					</p>
				</div>
			</div>
		</section>
	);
};
