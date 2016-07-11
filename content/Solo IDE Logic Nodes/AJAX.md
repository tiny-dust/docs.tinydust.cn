AJAX nodes are used for AJAX requests.

## Get JSON
AJAX request with GET method, arguments are passed by URL search parameter
(a.k.a. query string), and the result is treated as JSON.

<dl>
  <dt>(Attribute) Base URL</dt>
  <dd>The URL to access without query string.</dd>

  <dt>(Input) URL Search Parameter</dt>
  <dd>Query string in a key-value paired JS Object.
  Escaping will be taken care of. It will be appended to the Base URL.</dd>

  <dt>(Output) JSON Data</dt>
  <dd>JS Object parsed from the resulting JSON. There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

## Post Form for JSON
AJAX request with POST method, arguments are passed by multipart form data,
and the result is treated as JSON.

<dl>
  <dt>(Attribute) Base URL</dt>
  <dd>The URL to access without query string.</dd>

  <dt>(Attribute) URL Search Parameter</dt>
  <dd>Query string in a key-value paired JS Object.
  Escaping will be taken care of. It will be appended to the Base URL.</dd>

  <dt>(Input) Form Data</dt>
  <dd>Form data in a key-value paired JS Object.
  Escaping will be taken care of. It will be converted to multipart form data
  by the logic system.</dd>

  <dt>(Output) JSON Data</dt>
  <dd>JS Object parsed from the resulting JSON. There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

## Post JSON
AJAX request with POST method, arguments are passed as JSON data
(a.k.a. `application/json`), and the result is treated as JSON.

<dl>
  <dt>(Attribute) Base URL</dt>
  <dd>The URL to access without query string.</dd>

  <dt>(Attribute) URL Search Parameter</dt>
  <dd>Query string in a key-value paired JS Object.
  Escaping will be taken care of. It will be appended to the Base URL.</dd>

  <dt>(Input) JSON Data</dt>
  <dd>JSON data in a JS Object. It will be encoded to JSON string
  by the logic system.</dd>

  <dt>(Output) JSON Data</dt>
  <dd>JS Object parsed from the resulting JSON. There won't be any output if error occurs.</dd>

  <dt>(Output) Error</dt>
  <dd>A string error message. There won't be any output unless error occurs.</dd>
</dl>

