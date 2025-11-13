import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { IntegrationBadge } from "@/components/IntegrationBadge";
import { Clock, TrendingDown, Zap, TrendingUp, Brain, MessageSquare, Calendar, BookOpen, AlertTriangle, CheckCircle2, Target, BarChart3, Database, Mail, Phone, Users, Building2, Store, Award, Package, Flag, Wrench, CreditCard, Smartphone, Home, Briefcase, Heart, Dumbbell, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-start">
          <div className="flex items-center gap-4">
            <img src={logo} alt="GEON AI Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl text-muted-foreground">×</span>
            <span className="text-2xl font-bold text-primary">Kikos Fitness</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span>35 anos de pioneirismo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>7.9/10 no Reclame Aqui</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                <Flag className="w-4 h-4 text-primary" />
                <span>Top 3 fabricantes nacionais</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nosso Geon SDR{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-cyan-400 bg-clip-text text-transparent">
                multiplica
              </span>{" "}
              sua receita de forma automatizada
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialista em qualificação de leads e agendamento de vendas para a Kikos Fitness. 
              Atende via chat e voz 24/7, com conhecimento profundo sobre equipamentos fitness, cardiovasculares, musculação e soluções para academias.
            </p>

            <Button size="lg" className="text-lg px-8 shadow-[0_0_20px_rgba(0,198,255,0.3)] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)]">
              <Brain className="w-5 h-5 mr-2" />
              Conheça o Agente
            </Button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              <StatCard icon={Building2} value="50.000+" label="Salas Fitness Equipadas" iconColor="text-emerald-400" />
              <StatCard icon={Store} value="20" label="Showrooms no Brasil" iconColor="text-blue-400" />
              <StatCard icon={Users} value="300" label="Revendedores Autorizados" iconColor="text-purple-400" />
              <StatCard icon={TrendingUp} value="R$ 17bi" label="Mercado Fitness Brasil" iconColor="text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Contexto do Mercado */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que Kikos Fitness precisa de um Geon SDR?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* O Desafio */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <h3 className="text-2xl font-bold">O Desafio</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  A Kikos Fitness é <strong className="text-foreground">Top 3 fabricante nacional</strong> de equipamentos fitness, 
                  com <strong className="text-foreground">50.000+ salas equipadas</strong> em todo Brasil. 
                  Opera em um mercado que movimenta <strong className="text-foreground">R$ 17 bilhões/ano</strong>, 
                  com <strong className="text-foreground">57.000 academias</strong> ativas e crescimento de{" "}
                  <strong className="text-foreground">+12,5% ao ano</strong>.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  O Brasil é o <strong className="text-foreground">2º maior mercado fitness do mundo</strong>, 
                  atrás apenas dos EUA. Com o volume crescente de leads vindos de{" "}
                  <strong className="text-foreground">20 showrooms</strong>,
                  <strong className="text-foreground"> e-commerce</strong> e{" "}
                  <strong className="text-foreground">300 revendedores</strong>, cada lead não atendido representa:
                </p>
                <ul className="space-y-3">
                  {["Perda de oportunidade de venda (ticket médio alto para equipamentos profissionais)", "Desperdício de tempo da equipe com leads não qualificados", "Experiência ruim para o potencial cliente", "Vantagem para concorrentes do mercado fitness"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-destructive mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>

              {/* A Solução */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">A Solução</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Geon SDR especializado resolve esses desafios com:
                </p>
                <ul className="space-y-3">
                  {[{
                  label: "Qualificação precisa",
                  desc: "de leads por segmento (B2C/B2B) e tipo de equipamento"
                }, {
                  label: "Disponibilidade 24/7",
                  desc: "para capturar leads a qualquer hora"
                }, {
                  label: "Conhecimento técnico",
                  desc: "sobre linhas de produtos, especificações e aplicações"
                }, {
                  label: "Follow-up consistente",
                  desc: "e automatizado"
                }, {
                  label: "Escala ilimitada",
                  desc: "sem aumentar custos proporcionalmente"
                }].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">{item.label}</strong>{" "}
                        <span className="text-muted-foreground">{item.desc}</span>
                      </span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geon SDR Especialista */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Geon SDR, especialista na Kikos Fitness</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Um especialista virtual que trabalha 24/7 para qualificar leads, agendar demonstrações 
                e garantir que sua equipe comercial foque apenas em oportunidades reais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard icon={Brain} title="Qualificação Inteligente" items={["Identifica segmento (B2C residencial ou B2B academias/empresas)", "Entende necessidades específicas do cliente", "Avalia espaço disponível e objetivos fitness", "Classifica leads por potencial de compra"]} />
              <FeatureCard icon={MessageSquare} title="Atendimento Multicanal" items={["WhatsApp B2B (11 991078698) e SAC (54 954141816)", "Chat no site 24/7", "20 showrooms físicos para agendamento de test-drive", "Integração automática com CRM", "Registro completo de interações"]} />
              <FeatureCard icon={Calendar} title="Agendamento Inteligente" items={["Agenda visitas ao showroom automaticamente", "Envia lembretes e informações de produtos", "Prepara briefing para equipe de vendas", "Follow-up de orçamentos e propostas"]} />
              <FeatureCard icon={BookOpen} title="Conhecimento Especializado" items={["Portfólio completo: Cardiovasculares, Musculação, Acessórios", "Linhas profissionais (Concept, Titanium, Monster, etc)", "Diferenças entre modelos residenciais e profissionais", "App Kikos Fit: 35K usuários ativos, integração com equipamentos IoT", "Promoções: Kikos Black, Outlet, parcelamento 21x"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Quem é a Kikos Fitness */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quem é a Kikos Fitness
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pioneira e referência nacional em equipamentos fitness há mais de 35 anos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* História */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">História de Sucesso</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fundada por <strong className="text-foreground">Kiko Bonventi</strong></li>
                  <li>• 35+ anos de mercado (desde 1990)</li>
                  <li>• Primeira fabricante nacional de esteiras</li>
                  <li>• Pioneira em showrooms experienciais</li>
                </ul>
              </div>

              {/* Infraestrutura */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">Infraestrutura Nacional</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong className="text-foreground">20 showrooms</strong> em todo Brasil</li>
                  <li>• 2 centros de distribuição (SP e SC)</li>
                  <li>• 200+ colaboradores diretos</li>
                  <li>• 300 revendedores autorizados</li>
                </ul>
              </div>

              {/* Números */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">Alcance e Impacto</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong className="text-foreground">50.000+ salas</strong> equipadas</li>
                  <li>• 149.000 seguidores nas redes</li>
                  <li>• Faturamento: R$ 150-250 milhões/ano</li>
                  <li>• Market share: 8-12% nacional</li>
                </ul>
              </div>
            </div>

            {/* App Kikos Fit */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">App Kikos Fit</h3>
                  <p className="text-muted-foreground mb-3">
                    Investimento de <strong className="text-foreground">R$ 10 milhões</strong> em tecnologia para criar 
                    um ecossistema fitness completo: <strong className="text-foreground">35.000 usuários ativos</strong> e 
                    85.000 cadastrados.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      Treinos personalizados
                    </span>
                    <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      Acompanhamento de evolução
                    </span>
                    <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      Integração com equipamentos IoT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que a Kikos é líder de mercado
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Diferenciais que fazem da Kikos a escolha de 50.000+ academias e consumidores
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tecnologia Nacional */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Flag className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-bold mb-2">Tecnologia 🇧🇷</h3>
                <p className="text-sm text-muted-foreground">
                  100% desenvolvida no Brasil, com know-how de 35 anos e assistência técnica em todo território nacional
                </p>
              </div>

              {/* Portfólio Completo */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2">Portfólio Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Do residencial ao profissional: 4 categorias, 9 linhas de máquinas, centenas de produtos
                </p>
              </div>

              {/* Assistência Técnica */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-bold mb-2">Assistência Própria</h3>
                <p className="text-sm text-muted-foreground">
                  50+ técnicos certificados, peças originais em estoque, atendimento em 24-48h nas principais capitais
                </p>
              </div>

              {/* Condições Comerciais */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold mb-2">Condições Flexíveis</h3>
                <p className="text-sm text-muted-foreground">
                  Até 21x sem juros (B2C), até 100x (B2B), 20% desconto à vista, promoções semanais
                </p>
              </div>
            </div>

            {/* Reputação */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7.9/10</div>
                <p className="text-sm text-muted-foreground">Reclame Aqui</p>
                <p className="text-xs text-muted-foreground mt-1">98.4% de respostas</p>
              </div>
              <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <p className="text-sm text-muted-foreground">Anos de Mercado</p>
                <p className="text-xs text-muted-foreground mt-1">Desde 1990</p>
              </div>
              <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Top 3</div>
                <p className="text-sm text-muted-foreground">Fabricante Nacional</p>
                <p className="text-xs text-muted-foreground mt-1">Market share 8-12%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas e Casos de Uso */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quem o Geon SDR atende perfeitamente
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Personas reais, com necessidades distintas, todas atendidas automaticamente
              </p>
            </div>

            {/* B2C */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Home className="w-6 h-6 text-primary" />
                Consumidor Final (B2C) - 30% da receita
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Carlos - Profissional */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Carlos, 38 anos</h4>
                      <p className="text-xs text-muted-foreground">Gerente Comercial</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Quer montar home gym completa. Orçamento R$ 8-12mil. Praticante avançado, pesquisa muito antes de comprar.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Necessita:</strong> Esteira profissional + Estação</p>
                    <p className="text-xs"><strong>Objeção:</strong> "E se eu não usar?"</p>
                    <p className="text-xs text-primary"><strong>Geon resolve:</strong> Qualifica perfil, agenda showroom, calcula ROI vs academia</p>
                  </div>
                </div>

                {/* Juliana - Mãe */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Juliana, 42 anos</h4>
                      <p className="text-xs text-muted-foreground">Empresária e Mãe</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Iniciante, recomendação médica. Orçamento R$ 3-5mil. Tem vergonha de academia, quer treinar em casa.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Necessita:</strong> Esteira residencial fácil de usar</p>
                    <p className="text-xs"><strong>Objeção:</strong> "Não sei qual escolher"</p>
                    <p className="text-xs text-primary"><strong>Geon resolve:</strong> Consultoria, recomenda modelo ideal, explica parcelamento 21x</p>
                  </div>
                </div>

                {/* Rodrigo - Atleta */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Rodrigo, 28 anos</h4>
                      <p className="text-xs text-muted-foreground">Dev & Atleta Amador</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Avançado, faz crossfit. Orçamento R$ 6-10mil. Quer equipamentos robustos com IoT para treinos intensos.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Necessita:</strong> Air Bike + acessórios funcionais</p>
                    <p className="text-xs"><strong>Objeção:</strong> "Aguentam treino pesado?"</p>
                    <p className="text-xs text-primary"><strong>Geon resolve:</strong> Detalha specs técnicas, conecta com app Kikos Fit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Corporativo (B2B) - 60% da receita
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Fernando - Dono de Academia */}
                <div className="bg-card border border-primary/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Store className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Fernando, 45 anos</h4>
                      <p className="text-xs text-muted-foreground">Dono de Academia (400m², 300 alunos)</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Precisa renovar 30 equipamentos. Orçamento R$ 180-250mil. Quer parcelamento longo e assistência garantida.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Necessita:</strong> 10 esteiras + 15 máquinas + acessórios</p>
                    <p className="text-xs"><strong>Objeção:</strong> "Preço acima do orçado, assistência demora"</p>
                    <p className="text-xs text-primary"><strong>Geon resolve:</strong> Agenda visita técnica, oferece projeto 3D, parcela em até 100x</p>
                  </div>
                </div>

                {/* Paula - Síndica */}
                <div className="bg-card border border-primary/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Paula, 52 anos</h4>
                      <p className="text-xs text-muted-foreground">Síndica (condomínio 120 apts)</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Reformar academia do condomínio. Orçamento R$ 80-120mil. Precisa aprovar em assembleia, quer garantias.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Necessita:</strong> 3 esteiras + 2 bikes + elíptico + estação</p>
                    <p className="text-xs"><strong>Objeção:</strong> "Preciso de 3 orçamentos, e se quebrar?"</p>
                    <p className="text-xs text-primary"><strong>Geon resolve:</strong> Envia projeto 3D para assembleia, explica garantia, fornece referências</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">5 personas diferentes, com orçamentos de R$ 3mil a R$ 250mil,</strong> todas atendidas simultaneamente 24/7 pelo Geon SDR, com qualificação precisa e direcionamento correto para os canais de venda (B2B ou SAC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema de Integrações */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ecossistema de Integrações
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conecte seus Geons às ferramentas que você já utiliza, garantindo total aproveitamento 
                do investimento feito em soluções sistêmicas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {["Bancos de Dados", "Agendas", "CRMs", "ERPs", "Helpdesk", "E-commerce", "Pagamentos", "Marketing", "Planilhas", "Comunicação", "E-mail", "Telefonia", "Ferramentas de BI", "Redes Sociais", "APIs Customizadas"].map(integration => <IntegrationBadge key={integration} name={integration} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidade Operacional */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Disponibilidade Operacional
              </h2>
              <p className="text-xl text-muted-foreground">
                Enquanto um SDR humano trabalha 160 horas/mês, nosso Geon está disponível{" "}
                <strong className="text-primary">720 horas/mês</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* SDR Humano */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-muted-foreground" />
                  <h3 className="text-2xl font-bold">SDR Humano</h3>
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-muted-foreground">160h</div>
                  <p className="text-sm text-muted-foreground mt-1">por mês</p>
                </div>
                <ul className="space-y-2">
                  {["Horário comercial (8h/dia)", "Segunda a sexta", "Férias e atestados"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span>•</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>

              {/* Geon SDR */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Geon SDR</h3>
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary">720h</div>
                  <p className="text-sm text-muted-foreground mt-1">por mês</p>
                </div>
                <ul className="space-y-2">
                  {["24 horas por dia", "7 dias por semana", "Sem interrupções"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Impacto */}
            <div className="mt-12 bg-card border border-border rounded-lg p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Impacto para Kikos Fitness:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {["Leads que chegam fora do horário comercial são atendidos imediatamente", "Nenhum lead perdido por falta de disponibilidade", "Atendimento em finais de semana e feriados", "Resposta simultânea para múltiplos clientes (B2C e B2B)"].map((item, i) => <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seu ROI com o Geon SDR
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A Inteligência Artificial garante economia imediata e eficiência máxima, 
                atacando os principais custos operacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Disponibilidade */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Disponibilidade Operacional</h3>
                    <p className="text-sm text-muted-foreground">Horas ativas por mês: IA trabalha 4.5x mais</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">SDR Humano</span>
                      <span className="text-sm font-semibold">160h</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground" style={{
                      width: '22%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Geon IA</span>
                      <span className="text-sm font-semibold text-primary">720h</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{
                      width: '100%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribuição de Tarefas */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Distribuição de Tarefas</h3>
                    <p className="text-sm text-muted-foreground">Foco no que gera valor: 80% automatizável</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-[80] bg-primary/20 rounded-lg p-4 border border-primary/30">
                      <div className="text-2xl font-bold">80%</div>
                      <div className="text-sm text-muted-foreground">Repetitivas</div>
                    </div>
                    <div className="flex-[20] bg-secondary rounded-lg p-4 border border-border">
                      <div className="text-2xl font-bold">20%</div>
                      <div className="text-sm text-muted-foreground">Estratégicas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusão */}
            <div className="mt-12 bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Conclusão Estratégica</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Redução de Custos</h4>
                  <p className="text-sm text-muted-foreground">
                    A economia vai além do salário, estendendo-se à eliminação de encargos e turnover.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Produtividade Máxima</h4>
                  <p className="text-sm text-muted-foreground">
                    Com 720h/mês de disponibilidade, nenhum lead é perdido por inatividade.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Foco no Valor</h4>
                  <p className="text-sm text-muted-foreground">
                    60% das tarefas repetitivas são automatizadas, permitindo foco em vendas estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precificação e Estimativas de Tokens */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Precificação Transparente e Estimativas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entenda como funcionam os tokens e quanto você pode processar
              </p>
            </div>

            {/* Explicação de Tokens */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                O que são tokens?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">≈4</div>
                  <p className="text-sm text-muted-foreground">caracteres por token</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15-20</div>
                  <p className="text-sm text-muted-foreground">palavras = 1 frase (60-80 tokens)</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">120-200</div>
                  <p className="text-sm text-muted-foreground">tokens = 1 mensagem média</p>
                </div>
              </div>
            </div>

            {/* Estimativas Práticas */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Estimativas Práticas com 1 Milhão de Tokens</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold">Mensagens Curtas</h4>
                  </div>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">~20.000</div>
                  <p className="text-sm text-muted-foreground mb-3">mensagens</p>
                  <p className="text-xs text-muted-foreground">
                    50 tokens cada (respostas rápidas, confirmações)
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold">Mensagens Médias</h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">~6.600</div>
                  <p className="text-sm text-muted-foreground mb-3">mensagens</p>
                  <p className="text-xs text-muted-foreground">
                    150 tokens cada (consultas típicas, qualificação)
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold">Mensagens Longas</h4>
                  </div>
                  <div className="text-3xl font-bold text-purple-500 mb-2">~3.300</div>
                  <p className="text-sm text-muted-foreground mb-3">mensagens</p>
                  <p className="text-xs text-muted-foreground">
                    300 tokens cada (consultas complexas, técnicas)
                  </p>
                </div>
              </div>
            </div>

            {/* Tabela de Preços */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Preços por Modelo (por milhão de tokens)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-bold">Modelo</th>
                      <th className="text-center py-4 px-4 font-bold">Input</th>
                      <th className="text-center py-4 px-4 font-bold">Cached Input</th>
                      <th className="text-center py-4 px-4 font-bold">Output</th>
                      <th className="text-left py-4 px-4 font-bold">Melhor Para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold">GPT-5</div>
                        <div className="text-xs text-muted-foreground">Mais poderoso</div>
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-emerald-500">$1.25</td>
                      <td className="text-center py-4 px-4 text-sm text-muted-foreground">$0.125</td>
                      <td className="text-center py-4 px-4 font-semibold text-orange-500">$10.00</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">Consultas complexas, análise profunda</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold">GPT-4o</div>
                        <div className="text-xs text-muted-foreground">Rápido e eficiente</div>
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-emerald-500">$2.50</td>
                      <td className="text-center py-4 px-4 text-sm text-muted-foreground">$1.25</td>
                      <td className="text-center py-4 px-4 font-semibold text-orange-500">$10.00</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">Multimodal, imagens + texto</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold">GPT-4o-mini</div>
                        <div className="text-xs text-muted-foreground">Custo-benefício</div>
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-emerald-500">$0.15</td>
                      <td className="text-center py-4 px-4 text-sm text-muted-foreground">$0.075</td>
                      <td className="text-center py-4 px-4 font-semibold text-orange-500">$0.60</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">Consultas simples, alto volume</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">💡 Dica:</strong> O Geon SDR usa automaticamente o modelo mais adequado para cada tipo de interação, 
                  otimizando custos sem sacrificar qualidade. Mensagens simples usam GPT-4o-mini, enquanto consultas técnicas complexas usam GPT-5.
                </p>
              </div>
            </div>

            {/* Exemplo Prático */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Exemplo Prático: Kikos Fitness</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Cenário Real
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1.000 leads/mês via site, showrooms e revendedores</li>
                    <li>• Média de 5 mensagens por lead (qualificação completa)</li>
                    <li>• ~150 tokens por mensagem (média)</li>
                    <li>• <strong className="text-foreground">Total: 750.000 tokens/mês</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Custo Estimado
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Input: 0.75M × $0.15 = <strong className="text-foreground">$112.50</strong></li>
                    <li>• Output: 0.75M × $0.60 = <strong className="text-foreground">$450.00</strong></li>
                    <li>• <strong className="text-primary text-lg">Total: ~$562.50/mês</strong></li>
                    <li className="text-emerald-500">• <strong>vs R$ 12.000/mês</strong> (SDR humano)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Sobre */}
              <div>
                <h4 className="font-bold mb-4">Kikos Fitness</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Pioneira em equipamentos fitness no Brasil há 35+ anos
                </p>
                <p className="text-xs text-muted-foreground">
                  Top 3 fabricantes nacionais
                </p>
              </div>

              {/* Contatos */}
              <div>
                <h4 className="font-bold mb-4">Contatos</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp B2B: (11) 99107-8698
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp SAC: (54) 95414-1816
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Televendas: (11) 3097-8292
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h4 className="font-bold mb-4">Sede</h4>
                <p className="text-sm text-muted-foreground">
                  Av. dos Bandeirantes, 5066<br />
                  Planalto Paulista<br />
                  São Paulo - SP<br />
                  CEP: 04.071-000
                </p>
              </div>

              {/* Números */}
              <div>
                <h4 className="font-bold mb-4">Em Números</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">50.000+</strong> salas equipadas
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">20</strong> showrooms
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">300</strong> revendedores
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">149K</strong> seguidores
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2025 Kikos Fitness. Há 35 anos juntos pela saúde. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/kikosoficial/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/KikosFitnessStore/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/kikosfitnessoficial/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;