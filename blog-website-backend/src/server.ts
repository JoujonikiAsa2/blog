import { createClient } from "@supabase/supabase-js";

import app from "./app";
import config from "./app/config";

const main = async () => {
  app.listen(config.port, () => {
    console.log("Server is running on port 3000");
  });
};

main();
