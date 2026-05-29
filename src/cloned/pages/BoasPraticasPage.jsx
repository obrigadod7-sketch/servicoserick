import React from 'react';
import { Shield, Zap, Phone, Video, Award, User, Calendar, MessageSquare, Star, CreditCard, Smile, FileText, CheckCircle2, Eye } from 'lucide-react';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h2>
);

const Tip = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
  </div>
);

export default function BoasPraticasPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Boas Práticas</h1>
          <p className="text-gray-600 mt-2">Dicas para aproveitar o melhor da nossa comunidade com segurança e eficiência.</p>
        </div>

        {/* Verificação */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Você é solicitante?</h3>
            <p className="text-sm opacity-95">Verifique seu número de celular. Reforça a credibilidade do seu perfil — os ofertantes confiam mais e respondem com mais facilidade aos seus pedidos.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Você é ofertante?</h3>
            <p className="text-sm opacity-95">Verifique seu número de celular. Os solicitantes escolhem mais facilmente um perfil verificado e estão mais dispostos a entrar em contato.</p>
          </div>
        </div>

        <SectionTitle>Para Ofertantes</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tip icon={Shield} title="Seja prudente">Use a mensageria segura do app e evite outros canais (WhatsApp, SMS…).</Tip>
          <Tip icon={Zap} title="Seja ágil">A rapidez é fator-chave de sucesso — os solicitantes esperam respostas rápidas.</Tip>
          <Tip icon={Phone} title="Fique acessível">Faça chamadas direto pela mensageria. Você conversa sem expor seus dados pessoais e o solicitante já te identifica pelo seu perfil.</Tip>
          <Tip icon={Video} title="Esclareça sem se deslocar">Com chamadas de vídeo você identifica melhor o pedido e define o serviço ideal sem precisar ir até o local.</Tip>
          <Tip icon={Award} title="Mostre seu conhecimento">Explique e demonstre por que você é a pessoa certa para atender àquela necessidade.</Tip>
          <Tip icon={User} title="Complete seu perfil">90% dos solicitantes comparam perfis antes de avançar. Quanto mais completo, maiores suas chances.</Tip>
          <Tip icon={Calendar} title="Agende compromissos">Marque encontros direto na mensageria para garantir o compromisso. Lembretes por SMS e navegação GPS no dia.</Tip>
          <Tip icon={MessageSquare} title="Envie mensagens personalizadas">Nada de "copia e cola". Mostre que você se interessou pela situação do solicitante.</Tip>
          <Tip icon={Star} title="Peça avaliação">Avaliações decidem para 80% dos solicitantes. Peça sempre — e avalie seu cliente também.</Tip>
          <Tip icon={CreditCard} title="Solicite pagamento online">Pagamento por cartão é seguro, prático e gratuito. E gera mais confiança.</Tip>
          <Tip icon={Smile} title="Seja cordial">Convivência cordial faz toda a diferença.</Tip>
          <Tip icon={FileText} title="Profissionais: emita orçamentos e notas">Crie e envie orçamentos e notas em segundos pelo software de atividade. Aceite assinatura eletrônica e pagamento por cartão.</Tip>
        </div>

        <SectionTitle>Para Solicitantes</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tip icon={Shield} title="Seja prudente">Use a mensageria segura do app e evite outros canais (WhatsApp, SMS…).</Tip>
          <Tip icon={Phone} title="Fique acessível">Faça chamadas direto pela mensageria, sem compartilhar dados pessoais. O ofertante te identifica pelo perfil.</Tip>
          <Tip icon={Video} title="Descreva claramente seu pedido">Com vídeo você explica melhor a necessidade — o ofertante define o serviço ideal sem deslocamento.</Tip>
          <Tip icon={Zap} title="Seja ágil">Não deixe conversas se arrastarem. Quanto mais rápido, melhor o resultado.</Tip>
          <Tip icon={Eye} title="Seja claro e objetivo">Explique bem sua necessidade e anexe fotos para ganhar eficiência.</Tip>
          <Tip icon={Calendar} title="Agende um encontro">Marque pela mensageria. Recebe lembretes por SMS e tem navegação GPS no dia combinado.</Tip>
          <Tip icon={Star} title="Avalie o ofertante">Sua avaliação fortalece a confiança da comunidade e ajuda o ofertante a crescer.</Tip>
          <Tip icon={CreditCard} title="Pague online">Use o pagamento por cartão: seguro, prático e gratuito (sem comissões).</Tip>
          <Tip icon={Smile} title="Seja cordial">Responda a todos os ofertantes que se candidataram. Mesmo declinando, basta um clique.</Tip>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" /> Está lidando com um profissional?
          </h3>
          <p className="text-sm text-gray-600">Peça orçamento, nota fiscal e comprovante de seguro pela nossa ferramenta dedicada. Você recebe tudo direto na mensageria.</p>
        </div>
      </div>
    </div>
  );
}
