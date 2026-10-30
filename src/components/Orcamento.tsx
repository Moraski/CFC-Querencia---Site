// Ilha React: o aluno escolhe categoria e quantidade de aulas, e o botão abre o
// WhatsApp com a mensagem de orçamento já escrita.
import { useState } from 'react';
import { categorias, type Categoria } from '@/data/pacotes';
import { linkWhatsApp } from '@/lib/whatsapp';

const opcoesAulas = ['2 aulas', '5 aulas', '10 aulas', '15 aulas', 'Ainda não sei'];

export default function Orcamento() {
  const [categoria, setCategoria] = useState<Categoria>('AB');
  const [aulas, setAulas] = useState('10 aulas');
  const [nome, setNome] = useState('');

  const mensagem =
    `Olá! ${nome.trim() ? `Sou ${nome.trim()} e ` : ''}quero um orçamento para tirar a CNH: ` +
    `${categorias[categoria].curto.toLowerCase()}, ` +
    (aulas === 'Ainda não sei' ? 'ainda não sei quantas aulas preciso.' : `${aulas} práticas.`);

  const botao = (ativo: boolean) =>
    `min-h-11 rounded-full border-2 px-4 text-sm font-semibold transition ${
      ativo ? 'border-marca bg-marca text-white' : 'border-slate-300 bg-white hover:border-marca'
    }`;

  return (
    <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-slate-50 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">Monte seu orçamento</h3>
      <p className="mt-1 text-sm text-slate-600">Escolha as opções e receba o valor certinho pelo WhatsApp.</p>

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
        <legend className="text-sm font-semibold text-slate-700">Aulas práticas</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {opcoesAulas.map((a) => (
            <button key={a} type="button" onClick={() => setAulas(a)} aria-pressed={a === aulas} className={botao(a === aulas)}>
              {a}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-700">Seu nome (opcional)</span>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          autoComplete="given-name"
          className="mt-2 block min-h-11 w-full rounded-xl border-2 border-slate-300 bg-white px-4 focus:border-marca focus:outline-none"
        />
      </label>

      <a href={linkWhatsApp(mensagem)} className="btn-whatsapp mt-6 w-full">
        Receber orçamento no WhatsApp
      </a>
    </div>
  );
}
