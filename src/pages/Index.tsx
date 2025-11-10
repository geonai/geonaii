import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { IntegrationBadge } from "@/components/IntegrationBadge";
import { Clock, TrendingDown, Zap, TrendingUp, Brain, MessageSquare, Calendar, BookOpen, AlertTriangle, CheckCircle2, Target, BarChart3, Database, Mail, Phone, Users } from "lucide-react";
import logo from "@/assets/logo.png";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-start">
          <div className="flex items-center gap-4">
            <img src={logo} alt="GEON AI Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl text-muted-foreground">×</span>
            <span className="text-2xl font-bold text-primary">Hokinet</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>Infraestrutura e Automação de IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nosso Geon SDR{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-cyan-400 bg-clip-text text-transparent">
                multiplica
              </span>{" "}
              sua receita de forma automatizada
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialista em qualificação de leads e agendamento de demonstrações para a Hokinet. 
              Atende via chat e voz 24/7, com conhecimento profundo sobre gestão industrial e distribuição.
            </p>

            <Button size="lg" className="text-lg px-8 shadow-[0_0_20px_rgba(0,198,255,0.3)] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)]">
              <Brain className="w-5 h-5 mr-2" />
              Conheça o Agente
            </Button>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              <StatCard icon={Clock} value="24/7" label="Atendimento Ininterrupto" iconColor="text-blue-400" />
              <StatCard icon={Zap} value="10s" label="Tempo Médio de Resposta" iconColor="text-yellow-400" />
              <StatCard icon={TrendingUp} value="+200%" label="Leads Qualificados" iconColor="text-cyan-400" />
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
                Por que Hokinet precisa de um Geon SDR?
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
                  Com presença em <strong className="text-foreground">Nacional</strong> e mais de{" "}
                  <strong className="text-foreground">700 empresas</strong> atendidas, a Hokinet recebe um volume crescente de leads para o S7 ERP.
                </p>
                <p className="text-sm text-muted-foreground mb-4">Cada lead não atendido rapidamente ou mal qualificado representa:</p>
                <ul className="space-y-3">
                  {["Perda de oportunidade de venda (ticket médio alto de ERP)", "Desperdício de tempo da equipe com leads não qualificados", "Experiência ruim para o potencial cliente", "Vantagem para concorrentes"].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm">
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
                  desc: "de leads por segmento e porte"
                }, {
                  label: "Disponibilidade 24/7",
                  desc: "para capturar leads a qualquer hora"
                }, {
                  label: "Conhecimento técnico",
                  desc: "sobre S7 ERP e segmentos atendidos"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Geon SDR, especialista na Hokinet</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Um especialista virtual que trabalha 24/7 para qualificar leads, agendar demonstrações 
                e garantir que sua equipe comercial foque apenas em oportunidades reais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard icon={Brain} title="Qualificação Inteligente" items={["Identifica segmento e porte da empresa", "Entende dores específicas do negócio", "Avalia maturidade digital e urgência", "Classifica leads por score de prioridade"]} />
              <FeatureCard icon={MessageSquare} title="Atendimento Multicanal" items={["Chat (WhatsApp, site) 24/7", "Voz (telefone) com naturalidade", "Integração automática com CRM", "Registro completo de interações"]} />
              <FeatureCard icon={Calendar} title="Agendamento Inteligente" items={["Agenda demos automaticamente", "Envia lembretes automáticos", "Prepara briefing para o closer", "Reagenda em caso de no-show"]} />
              <FeatureCard icon={BookOpen} title="Conhecimento Especializado" items={["Funcionalidades completas do S7 ERP", "Módulos de gestão de produção", "Roteirização inteligente e B2B", "Expertise em 5+ segmentos industriais"]} />
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
                Impacto para Hokinet:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {["Leads que chegam fora do horário comercial são atendidos imediatamente", "Nenhum lead perdido por falta de disponibilidade", "Cobertura em feriados e finais de semana", "Atendimento simultâneo de múltiplos leads"].map((item, i) => <div key={i} className="flex items-start gap-2 text-sm">
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

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Geon AI. Infraestrutura e Automação de IA para maximizar resultados.</p>
        </div>
      </footer>
    </div>;
};
export default Index;