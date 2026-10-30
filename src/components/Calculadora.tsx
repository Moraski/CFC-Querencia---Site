// Ilha React: o aluno escolhe categoria, plano e forma de pagamento e vê quanto vai
// gastar no total, já somando as taxas do Detran e dos exames.
import { useState } from 'react';
import { categorias, planosDa, taxas, totalTaxas, formatarReais, type Categoria } from '@/data/pacotes';
import { linkWhatsApp } from '@/lib/whatsapp';

type Pagamento = 'aVista' | 'cartao';

export default function Calculadora() {
  const [categoria, setCategoria] = useState<Categoria>('AB');
  const [nomePlano, setNomePlano] = useState('Intermediário');
  const [pagamento, setPagamento] = useState<Pagamento>('aVista');

  const lista = planosDa(categoria);
  // Se o plano escolhido não existe na categoria (ex.: Avançado só carro), usa o primeiro
  const plano = lista.find((p) => p.nome === nomePlano) ?? lista[0];
  const valorPlano = plano[pagamento];
  const total = valorPlano + totalTaxas(categoria);

  const aulas = (plano.aulasMoto ? `${plano.aulasMoto} moto + ` : '') + `${plano.aulasCarro} carro`;
  const mensagem =
    `Olá! Fiz a simulação no site: plano ${plano.nome} ${categorias[categoria].curto.toLowerCase()} (${aulas}), ` +
    (pagamento === 'aVista' ? 'à vista' : `no cartão em até ${plano.parcelas}x`) +
    `. Quero começar meu processo.`;

  const botao = (ativo: boolean) =>
    `min-h-11 rounded-full border-2 px-4 text-sm font-semibold transition ${
      ativo ? 'border-marca bg-marca text-white' : 'border-slate-300 bg-white hover:border-marca'
    }`;

  return (
    <div className="mx-auto mt-14 grid max-w-4xl gap-8 rounded-3xl bg-slate-50 p-6 sm:p-8 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Calcule o custo total da sua CNH</h3>
        <p className="mt-1 text-sm text-slate-600">Plano de aulas + taxas do Detran e dos exames.</p>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-slate-700">Categoria</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(categorias) as Categoria[]).map((c) => (
              <button key={c} type="button" onClick={() => setCategoria(c)} aria-pressed={c === categoria} className={botao(c === categoria)}>
                {categorias[c].curto}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-slate-700">Plano</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {lista.map((p) => (
              <button key={p.id} type="button" onClick={() => setNomePlano(p.nome)} aria-pressed={p.id === plano.id} className={botao(p.id === plano.id)}>
                {p.nome}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-slate-700">Pagamento do plano</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setPagamento('aVista')} aria-pressed={pagamento === 'aVista'} className={botao(pagamento === 'aVista')}>
              À vista
            </button>
            <button type="button" onClick={() => setPagamento('cartao')} aria-pressed={pagamento === 'cartao'} className={botao(pagamento === 'cartao')}>
              Cartão até {plano.parcelas}x
            </button>
          </div>
        </fieldset>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">
              Plano {plano.nome} ({aulas})
            </dt>
            <dd className="font-semibold whitespace-nowrap">{formatarReais(valorPlano)}</dd>
          </div>
          {taxas.map((t) => (
            <div key={t.nome} className="flex justify-between gap-4">
              <dt className="text-slate-600">{t.nome}</dt>
              <dd className="font-semibold whitespace-nowrap">{formatarReais(t.valor[categoria])}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex items-end justify-between border-t border-slate-200 pt-4">
          <span className="font-semibold text-slate-700">Total estimado</span>
          <span className="text-3xl font-extrabold text-marca">{formatarReais(total)}</span>
        </div>
        {pagamento === 'cartao' && (
          <p className="mt-1 text-right text-sm text-slate-600">
            plano em {plano.parcelas}x de {formatarReais(plano.cartao / plano.parcelas)}
          </p>
        )}
        <p className="mt-3 text-xs text-slate-500">Taxas e exames são pagos à parte, direto ao Detran e às clínicas.</p>
        <a href={linkWhatsApp(mensagem)} className="btn-whatsapp mt-5 w-full">
          Começar meu processo
        </a>
      </div>
    </div>
  );
}
