import * as _et from 'exupery-core-types';
import * as d_in from "../../../generated/pareto/schemas/html-print/data_types/source";
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target";
export type Classes = _et.Transformer<d_out.Block_Part, d_in.Classes>;
export type Span = _et.Transformer<d_out.Block_Part, d_in.Span>;
export type Div = _et.Transformer<d_out.Block_Part, d_in.Div>;
export type Document = _et.Transformer<d_out.Group, d_in.Document>;
