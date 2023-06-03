"use server";

export async function postName(data: any) {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return data;
}
