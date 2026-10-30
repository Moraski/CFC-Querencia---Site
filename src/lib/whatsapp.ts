import { site } from '@/data/site';

/**
 * Monta o link do WhatsApp com a mensagem já escrita.
 * `encodeURIComponent` cuida dos acentos e espaços, que era o que quebrava no site antigo
 * ("Ol%C3%A ... Bem Vindo1").
 */
export function linkWhatsApp(mensagem = 'Olá! Vim pelo site e quero saber mais sobre a CNH.'): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
