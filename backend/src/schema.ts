import glob from "glob";
import fs from "fs";
import path from "path";

function loadSchemas() {
    const files = glob.sync("./../schema/**/*.{gql,graphql}");

    return files.map((file) =>
        fs.readFileSync(path.resolve(file), { encoding: "utf8" })
    );
}
const schemas = loadSchemas();
export default schemas;