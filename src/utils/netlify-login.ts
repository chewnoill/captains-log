declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user: any) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
export default () => null;
