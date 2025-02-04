import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const locale = cookieStore.get('LOCALE')?.value || 'en';

    return {
        locale,
        messages: (await import(`@/app/locales/${ locale }.json`)).default,
    };
});