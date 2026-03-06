/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ChevronRight, 
  Truck, 
  MessageCircle, 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20receber%20o%20catálogo%20de%20atacado%20da%20Pietà.";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-serif tracking-widest uppercase font-semibold">Pietà</div>
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-brand-gold transition-colors"
    >
      Atendimento Exclusivo <ArrowRight size={14} />
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">
          B2B • Atacado Premium
        </span>
        <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 font-light">
          Moda Feminina <br />
          <span className="italic">Premium</span> para Lojistas
        </h1>
        <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed font-light">
          Coleções exclusivas para boutiques que buscam elegância e sofisticação. 
          A Pietà desenvolve peças pensadas para lojas que valorizam qualidade, estilo e identidade.
        </p>
        
        <div className="space-y-3 mb-10">
          {[
            "Coleções exclusivas",
            "Peças com design sofisticado",
            "Ideal para boutiques e lojas multimarcas",
            "Atendimento comercial personalizado"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-stone-700">
              <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center">
                <Check size={12} className="text-stone-900" />
              </div>
              <span className="text-sm font-light tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-stone-800 transition-all shadow-xl shadow-stone-200"
        >
          Solicitar Catálogo no WhatsApp <MessageCircle size={18} />
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-[4/5] md:aspect-[3/4]"
      >
        <div className="absolute inset-0 bg-stone-200 rounded-2xl overflow-hidden">
          <img 
            src="https://cdn-op.vesti.mobi/p/368683/99019e2d-aab3-49e2-b48b-d4d9a5bf8129/19614-lg.webp" 
            alt="Modelo Pietà" 
            className="w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl hidden lg:block max-w-xs">
          <p className="font-serif italic text-xl mb-2">"A curadoria perfeita para sua vitrine."</p>
          <p className="text-[10px] uppercase tracking-widest text-stone-400">Pietà Editorial 2024</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 font-light">Elegância que transforma vitrines</h2>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto mb-8" />
          <p className="text-xl text-stone-600 leading-relaxed font-light mb-6">
            A Pietà é o seu <strong className="font-medium text-stone-900">fornecedor de moda feminina</strong> com identidade sofisticada, 
            especializado em atender boutiques e lojistas que buscam <strong className="font-medium text-stone-900">comprar moda feminina no atacado</strong> com exclusividade.
          </p>
          <p className="text-lg text-stone-500 leading-relaxed font-light">
            Se você procura <strong className="font-medium text-stone-900">roupas para revender</strong> que unam design, qualidade e estilo atemporal, 
            nossa marca oferece a curadoria ideal para elevar o posicionamento da sua loja.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Collection = () => {
  const items = [
    { title: "Vestidos Fluidos", img: "https://cdn-op.vesti.mobi/p/368683/dae3e766-24ab-40db-9dd6-e8d775cc8bdb/30836-lg.webp" },
    { title: "Conjuntos Alfaiataria", img: "https://cdn-op.vesti.mobi/p/368683/e30d3e02-16ef-4b99-b6d4-1524ad8fad54/48650-lg.webp" },
    { title: "Peças Atemporais", img: "https://cdn-op.vesti.mobi/p/368683/d0dea043-3bc5-4240-ab44-7a8865e79c29/71108-lg.webp" },
    { title: "Looks Boutique", img: "https://cdn-op.vesti.mobi/p/368683/33fe4423-bfe2-481e-bad4-b501a37ce4b3/42067-lg.webp" }
  ];

  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-400 mb-2 block">Preview</span>
            <h2 className="text-4xl font-light">Nossa Coleção</h2>
          </div>
          <p className="text-stone-500 text-sm max-w-xs text-right hidden md:block italic">
            Estética editorial pensada para o público mais exigente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-stone-200">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-serif italic text-stone-800">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Produto Boutique</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => (
  <section className="py-24 bg-stone-900 text-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Por que lojistas escolhem a Pietà</h2>
          <div className="space-y-8">
            {[
              { title: "Peças com forte apelo de vitrine", desc: "Design que atrai o olhar e converte em vendas imediatas." },
              { title: "Modelagens sofisticadas", desc: "Caimento impecável que valoriza a silhueta feminina." },
              { title: "Curadoria pensada para revenda", desc: "Mix de produtos equilibrado para facilitar sua compra." },
              { title: "Identidade de Marca", desc: "Valorizamos a curadoria da sua loja com peças exclusivas." },
              { title: "Atendimento Direto", desc: "Consultoria personalizada para auxiliar em seus pedidos." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-brand-gold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-stone-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
              alt="Ambiente Boutique" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <div className="border border-white/30 p-10 backdrop-blur-sm">
              <p className="text-2xl font-serif italic">"Moda que comunica sofisticação em cada detalhe."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light mb-4">Como funciona o atacado</h2>
        <p className="text-stone-500 font-light tracking-wide">Processo simplificado para sua boutique</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Solicite Atendimento", desc: "Entre em contato via WhatsApp com nossa equipe." },
          { step: "02", title: "Receba o Catálogo", desc: "Acesse nossa coleção atualizada e condições." },
          { step: "03", title: "Escolha os Modelos", desc: "Selecione as peças que mais combinam com sua loja." },
          { step: "04", title: "Receba seu Pedido", desc: "Envio seguro e rápido para todo o Brasil." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="text-5xl font-serif italic text-stone-100 group-hover:text-stone-200 transition-colors mb-4">{item.step}</div>
            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Logistics = () => (
  <section className="py-20 bg-stone-50 border-y border-stone-200">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-start gap-5">
          <Truck className="text-stone-400 mt-1" size={24} />
          <div>
            <h4 className="font-medium mb-2">Envio para todo Brasil</h4>
            <p className="text-sm text-stone-500 font-light">Parcerias com as melhores transportadoras para garantir segurança.</p>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <ShieldCheck className="text-stone-400 mt-1" size={24} />
          <div>
            <h4 className="font-medium mb-2">Suporte Comercial</h4>
            <p className="text-sm text-stone-500 font-light">Atendimento personalizado durante todo o processo de compra.</p>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <Clock className="text-stone-400 mt-1" size={24} />
          <div>
            <h4 className="font-medium mb-2">Catálogo Frequente</h4>
            <p className="text-sm text-stone-500 font-light">Novidades constantes para manter sua vitrine sempre atualizada.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-light text-center mb-16 italic font-serif">O que dizem nossos lojistas parceiros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { text: "As peças têm ótima aceitação na loja. O caimento é o grande diferencial que minhas clientes amam.", author: "Boutique Elegance", city: "São Paulo" },
          { text: "A marca transmite elegância e vende muito bem. O suporte da equipe comercial é excelente.", author: "Multimarcas Premium", city: "Curitiba" },
          { text: "Clientes adoram a qualidade das peças. É o fornecedor que faltava para elevar o nível da minha vitrine.", author: "Loja Maria Flor", city: "Belo Horizonte" }
        ].map((item, i) => (
          <div key={i} className="p-10 border border-stone-100 rounded-2xl bg-stone-50/50 relative">
            <Star className="text-brand-gold mb-6" size={16} fill="currentColor" />
            <p className="text-stone-700 font-light leading-relaxed mb-6 italic">"{item.text}"</p>
            <div>
              <p className="font-medium text-sm">{item.author}</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">{item.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-900 text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6">
          Aviso Importante
        </div>
        <p className="text-stone-400 text-sm font-light mb-12">
          Atendemos exclusivamente vendas no atacado para lojistas e revendedores. 
          Não realizamos vendas unitárias nesta página.
        </p>
        
        <h2 className="text-4xl md:text-5xl font-light mb-6">Quer oferecer Pietà na sua loja?</h2>
        <p className="text-stone-400 font-light mb-10">
          Solicite agora o catálogo e as condições de atacado diretamente com nossa equipe comercial.
        </p>
        
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-stone-900 px-12 py-6 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-stone-100 transition-all"
        >
          Receber Catálogo Agora <MessageCircle size={18} />
        </motion.a>
        <p className="mt-6 text-[10px] uppercase tracking-widest text-stone-500">Atendimento rápido via WhatsApp</p>
      </div>
      
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-serif tracking-widest uppercase font-semibold">Pietà</div>
        <div className="text-[10px] uppercase tracking-widest text-stone-500">
          © 2024 Pietà Oficial • Todos os direitos reservados
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/pieta_apm/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Instagram</a>
          <a href="https://www.pietaoficial.com.br/pieta/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Site Oficial</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-stone-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection />
        <WhyChoose />
        <HowItWorks />
        <Logistics />
        <Testimonials />
      </main>
      <Footer />
      
      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
