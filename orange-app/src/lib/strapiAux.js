export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// pegar imagem do Strapi
export function getStrapiMedia(url) {
  if (!url) {
    return undefined;
  }

  // verifica se já é o link completo
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}

// erros do strapi
export function handleStrapiError(error) {
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (error?.response?.data?.error?.details?.errors?.[0]?.message) {
    return error.response.data.error.details.errors[0].message;
  }

  if (error?.message) {
    return error.message;
  }
  return 'erro ao comunicar com o server do Strapi.';
}