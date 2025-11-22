export async function getPathname(): Promise<string> {
  const headersList = await (await import("next/headers")).headers();
  const pathname = headersList.get("x-pathname");
  if (pathname) {
    return pathname;
  }
  return "/";
}
