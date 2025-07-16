import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const loginSchema = z.object({
  name: z.string().min(1, { message: 'Digite seu nome para continuar' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const navigate = useNavigate();

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

    sessionStorage.setItem('user', name);
    navigate('/');
  }

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center px-4">
      <div className="container flex max-w-[32.5rem] flex-col items-center gap-5">
        <h2 className="text-4xl">Olá, seja bem-vindo!</h2>

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
                      placeholder="Digite seu nome:"
                      {...field}
                      className="placeholder:text-[#AAAAAA]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full cursor-pointer">Entrar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
