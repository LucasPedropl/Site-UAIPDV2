import React, { useEffect, useRef, useState } from 'react';

const StoreIconWindows = () => (
	<svg
		viewBox="0 0 16 16"
		className="h-5 w-5 text-[#9ec2ff]"
		fill="currentColor"
		aria-hidden
	>
		<path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" />
	</svg>
);

const StoreIconAndroid = () => (
	<svg
		viewBox="0 0 16 16"
		className="h-5 w-5 text-[#6ee7b7]"
		fill="currentColor"
		aria-hidden
	>
		<path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
	</svg>
);

const StoreIconApple = () => (
	<svg
		viewBox="0 0 16 16"
		className="h-5 w-5 text-white"
		fill="currentColor"
		aria-hidden
	>
		<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
	</svg>
);

const StoreIconPlay = () => (
	<svg
		viewBox="0 0 24 24"
		className="h-5 w-5"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.4"
	>
		<path
			d="M4 4.8c0-.7.8-1.2 1.5-.8l13.1 7.2c.7.4.7 1.3 0 1.7L5.5 20c-.7.4-1.5-.1-1.5-.8z"
			fill="url(#playGradient)"
			stroke="none"
		/>
		<defs>
			<linearGradient
				id="playGradient"
				x1="4"
				x2="20"
				y1="12"
				y2="12"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#34d399" />
				<stop offset="0.5" stopColor="#60a5fa" />
				<stop offset="1" stopColor="#a78bfa" />
			</linearGradient>
		</defs>
	</svg>
);

type StoreBadgeProps = {
	label: string;
	icon: React.ReactNode;
};

const StoreBadge: React.FC<StoreBadgeProps> = ({ label, icon }) => (
	<div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:border-brand-blue/60 hover:bg-brand-blue/10 transition">
		<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white">
			{icon}
		</span>
		<span className="text-sm font-semibold text-white">{label}</span>
	</div>
);

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

export const Mobilidade = ({ content }: { content: any }) => {
	return (
		<>
			{/* Hero Section */}
			<section className="relative isolate overflow-hidden py-24 sm:py-32 bg-gray-950 text-white">
				<div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl">
						<p className="text-sm uppercase tracking-[0.3em] text-white/70">
							{content.heroKicker}
						</p>
						<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
							{content.heroTitle}
						</h1>
						<p className="mt-6 text-lg sm:text-xl text-white/80">
							{content.heroSubtitle}
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<a
								className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition"
								href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185"
								target="_blank"
								rel="noreferrer"
							>
								{content.heroPrimaryCta}
							</a>
							<a
								className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/40 text-white font-semibold hover:bg-white/10 transition"
								href="#"
								onClick={(e) => {
									e.preventDefault(); /* Handle navigation if needed */
								}}
							>
								{content.heroSecondaryCta}
							</a>
						</div>

						{/* Platform Icons */}
						<div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 sm:gap-6">
							<StoreBadge
								label="Windows"
								icon={<StoreIconWindows />}
							/>
							<StoreBadge
								label="Android"
								icon={<StoreIconAndroid />}
							/>
							<StoreBadge label="iOS" icon={<StoreIconApple />} />
						</div>
					</div>
				</div>
			</section>

			{/* Autonomy Section (Gradient) */}
			<section className="py-16 sm:py-24 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-white">
						<div className="max-w-2xl">
							<p className="text-sm uppercase tracking-[0.3em] text-white/60">
								{content.autonomyTitle}
							</p>
							<h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
								{content.autonomySubtitle}
							</h2>
						</div>
						<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
							{content.autonomy.map(
								(feature: any, idx: number) => (
									<FadeSection key={idx} delay={idx * 100}>
										<article className="bg-white/10 rounded-3xl p-6 backdrop-blur border border-white/10">
											<div className="rounded-2xl overflow-hidden bg-white/5 mb-4">
												<img
													src={feature.image}
													alt={feature.title}
													className="w-full h-48 object-contain mix-blend-screen"
													onError={(e) => {
														e.currentTarget.src =
															'https://placehold.co/400x300?text=Autonomia';
														e.currentTarget.onerror =
															null;
													}}
												/>
											</div>
											<h3 className="text-xl font-semibold text-white">
												{feature.title}
											</h3>
											<p className="mt-3 text-white/80">
												{feature.description}
											</p>
										</article>
									</FadeSection>
								)
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Highlight Section (Mini PDV) */}
			<section className="py-16 sm:py-24 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<p className="text-sm uppercase tracking-widest text-brand-blue">
							{content.highlightKicker}
						</p>
						<h2 className="mt-4 text-3xl sm:text-4xl font-bold">
							{content.highlightTitle}
						</h2>
						<p className="mt-6 text-gray-600">
							{content.highlightText}
						</p>
						<div className="mt-8">
							<a
								className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition"
								href="#"
								target="_blank"
								rel="noopener"
							>
								{content.highlightCta}
							</a>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 blur-3xl bg-brand-blue/20 -z-10"></div>
						<div className="rounded-3xl bg-white shadow-2xl p-6">
							<img
								className="w-full rounded-2xl object-cover"
								alt="Mini PDV"
								src={content.highlightImage}
								onError={(e) => {
									e.currentTarget.src =
										'https://placehold.co/600x400?text=Mini+PDV';
									e.currentTarget.onerror = null;
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Chatbot Section */}
			<section className="py-16 sm:py-24 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<p className="text-sm uppercase tracking-widest text-brand-blue">
							Chatbot
						</p>
						<h2 className="mt-4 text-3xl font-bold">
							{content.chatbotTitle}
						</h2>
						<p className="mt-6 text-gray-600">
							{content.chatbotText}
						</p>
					</div>
					<div className="relative">
						<div className="absolute inset-0 blur-3xl bg-brand-blue/20 -z-10"></div>
						<div className="rounded-3xl bg-gray-50 p-6 shadow-2xl">
							<img
								className="w-full rounded-2xl object-contain"
								alt="Chatbot"
								src={content.chatbotImage}
								onError={(e) => {
									e.currentTarget.src =
										'https://placehold.co/400x400?text=Chatbot';
									e.currentTarget.onerror = null;
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Indoor Media Section */}
			<section className="py-16 sm:py-24 bg-gray-900 text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<p className="text-sm uppercase tracking-widest text-white/70">
							Comunicação visual
						</p>
						<h2 className="mt-4 text-3xl font-bold">
							{content.indoorTitle}
						</h2>
						<p className="mt-6 text-white/80">
							{content.indoorText}
						</p>
						<a
							className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
							href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185"
							target="_blank"
							rel="noopener"
						>
							{content.indoorCta}
						</a>
					</div>
					<div className="relative">
						<div className="absolute inset-0 blur-3xl bg-white/10 -z-10"></div>
						<div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
							<img
								className="w-full h-full object-cover"
								alt="Mídia indoor"
								src={content.indoorImage}
								onError={(e) => {
									e.currentTarget.src =
										'https://placehold.co/600x400?text=M%C3%ADdia+Indoor';
									e.currentTarget.onerror = null;
								}}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
