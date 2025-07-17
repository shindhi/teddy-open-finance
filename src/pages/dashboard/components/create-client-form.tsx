import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { InputMask } from '@/components/input-mask';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const createClientFormSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  salary: z.string().min(1, { message: 'Salário é obrigatório' }),
  companyValue: z
    .string()
    .min(1, { message: 'Valor da empresa é obrigatório' }),
});

type CreateClientFormData = z.infer<typeof createClientFormSchema>;

const createClientSchema = createClientFormSchema.transform((data) => ({
  name: data.name,
  salary: (() => {
    const cleaned = data.salary.replace(/[^\d,]/g, '').replace(',', '.');
    const parsed = Number.parseFloat(cleaned);

    if (Number.isNaN(parsed) || parsed <= 0) {
      throw new Error('Valor inválido');
    }

    return parsed;
  })(),
  companyValue: (() => {
    const cleaned = data.companyValue.replace(/[^\d,]/g, '').replace(',', '.');
    const parsed = Number.parseFloat(cleaned);

    if (Number.isNaN(parsed) || parsed <= 0) {
      throw new Error('Valor inválido');
    }

    return parsed;
  })(),
}));

export function CreateClientForm() {
  const form = useForm<CreateClientFormData>({
    resolver: zodResolver(createClientFormSchema),
    defaultValues: {
      name: '',
      salary: '',
      companyValue: '',
    },
  });

  function handleCreateClient(data: CreateClientFormData) {
    const validatedData = createClientSchema.parse(data);
    console.log(data);
    console.log(validatedData);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleCreateClient)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="border-2"
                  placeholder="Digite o nome:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputMask
                  {...field}
                  className="border-2"
                  onValueChange={(values) => {
                    field.onChange(values.formattedValue);
                  }}
                  placeholder="Digite o salário:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyValue"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputMask
                  {...field}
                  className="border-2"
                  onValueChange={(values) => {
                    field.onChange(values.formattedValue);
                  }}
                  placeholder="Digite o valor da empresa:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="cursor-pointer py-3 font-bold"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Criar cliente
        </Button>
      </form>
    </Form>
  );
}
