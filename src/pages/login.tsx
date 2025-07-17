import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

const loginSchema = z.object({
  name: z.string().min(1, { message: 'Digite seu nome para continuar' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const { login } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: '',
    },
  });

  function handleSubmit({ name }: LoginFormData) {
    if (!name) {
      return;
    }

    login(name);
  }

  return (
    <div className="container flex max-w-[32.5rem] flex-col items-center gap-5">
      <h2 className="text-balance text-4xl">Olá, seja bem-vindo!</h2>

      <Form {...form}>
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="h-auto border-2 px-5 py-4 leading-none md:text-base"
                    placeholder="Digite seu nome:"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className={cn(
              'h-auto cursor-pointer py-4 font-bold leading-none md:text-2xl'
            )}
          >
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
}
