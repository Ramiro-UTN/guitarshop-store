"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import Modal from "@/components/modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
  FormDescription
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import Button from "@/components/ui/button";
import Price from "@/components/ui/price";
import useCart from "@/hooks/use-cart";

const formSchema = z.object({
  nombre: z.string().min(1, { message: "Ingresa su nombre." }),
  apellido: z.string().min(1, { message: "Ingresa su apellido." }),
  ciudad: z.string().min(1, { message: "Ingrese ciudad en la que vive." }),
  provincia: z.string().min(1, { message: "Ingrese provincia en la que vive." }),
  direccion: z.string().min(1, { message: "Ingrese direccíon de envío" }),
  telefono: z.string().min(1, { message: "Ingrese su teléfono" }),
  codPostal: z.string().min(1, { message: "Ingrese código postal" }),
});

type DatosCompradorFormValues = z.infer<typeof formSchema>



const ResumenCompra = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const form = useForm<DatosCompradorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      provincia: "",
      ciudad: "",
      direccion: "",
      telefono: "",
      codPostal: "",

    }

  })

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("El pago se completó con éxito.");
      removeAll();

    }

    if (searchParams.get("canceled")) {
      toast.error("Algo salió mal.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async (values: DatosCompradorFormValues) => {

    console.log("SUBMITED_VALUES: ", values);
    console.log("TEST_FORM", {productosIds: items.map(item => item.id), ...values});
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productosIds: items.map((item) => item.id), ...values });
    console.log(response);
    window.location = response.data.init_point;
  }


  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          form.reset();
        }}
      >

        <div className="m-auto h-full ">
          <h1 className="text-3xl font-bold text-black ">Datos del Comprador</h1>
          <hr className="flex my-4" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onCheckout)} className="space-y-8 w-full">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese su nombre..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Nombre del comprador.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apellido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese su apellido..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Apellido del comprador.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese su número de teléfono..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Número de teléfono.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese su dirección..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Dirección del comprador.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ciudad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese la ciudad en la que vive..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Ciudad en la que vive.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="provincia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provincia</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese la provincia en la que vive..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Provincia en la que vive.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="codPostal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código Postal</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ingrese código postal..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Código Postal de su ciudad.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end items-center w-full">
                <Button type="submit" className="mt-4">Checkout</Button>
              </div>
            </form>

          </Form>


        </div>
      </Modal >
      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6
    lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-500">
          Resumen
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">
              Total
            </div>
            <Price value={totalPrice} />
          </div>
        </div>
        <Button disabled={items.length === 0} onClick={() => setIsOpen(true)} className="w-full mt-6">Continuar</Button>
      </div>
    </>
  )
}

export default ResumenCompra;