var โพธิเงินลาย = function(engine)
{
	'use strict';
	var s = {
		textures:
		{
		},

		scenes:
		{
			"โพธิเงินลาย":
			{
				shaders:
				{
					// mesh, shader 'file:Arch41_057_obj_3Shape1'
					m_file_cArch41__057__obj__3Shape1:
					{
					},
					// mesh, shader 'file1:wire_115115116'
					m_file1_cwire__115115116:
					{
					}
				},

				initGlobal: function(global, data)
				{
					// mesh, shader 'file:Arch41_057_obj_3Shape1'
					var vsm_file_cArch41__057__obj__3Shape1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
uniform vec4 s_o[2];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * s_o[0].xyz + s_o[1].xyz;\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_file_cArch41__057__obj__3Shape1 =
'precision highp float;\n\
uniform float f_f;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = (_d);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * f_f;\n\
	vec3 d = _e;\n\
	vec3 e = d * d;\n\
	vec3 f = c * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 g = c * vec3(0.408248, -0.408248, -0.816497);\n\
	vec3 h = (vec3(0.408248, -0.408248, -0.816497) - (g.x + g.y + g.z) * 2.0 * c) * -(d * inversesqrt(e.x + e.y + e.z));\n\
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + 0.451) * vec3(0.142356, 0.404, 0.138168) + vec3(pow(max(h.x + h.y + h.z, 0.0), 34.0) * 0.35);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'file1:wire_115115116'
					var vsm_file1_cwire__115115116 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
uniform vec4 s_o[2];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * s_o[0].xyz + s_o[1].xyz;\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_file1_cwire__115115116 =
'precision highp float;\n\
uniform float f_f;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = (_d);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * f_f;\n\
	vec3 d = _e;\n\
	vec3 e = d * d;\n\
	vec3 f = c * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 g = c * vec3(0.408248, -0.408248, -0.816497);\n\
	vec3 h = (vec3(0.408248, -0.408248, -0.816497) - (g.x + g.y + g.z) * 2.0 * c) * -(d * inversesqrt(e.x + e.y + e.z));\n\
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + 0.451) * 0.451 + vec3(pow(max(h.x + h.y + h.z, 0.0), 34.0) * 0.35);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					var d = new engine.Decompressor(new Uint8Array(data, 0));
					var b1 = d.decompress8(225216);
					var b2 = d.decompress16(225216);
					var vb = new Float32Array(450432);
					for (var i = 0, j = 0; i < 75072; ++i, j += 6)
					{
						vb[j + 0] = b2[i + 0];
						vb[j + 1] = b2[i + 75072];
						vb[j + 2] = b2[i + 150144];
						vb[j + 3] = (b1[i + 0] << 24) * 4.65661e-10;
						vb[j + 4] = (b1[i + 75072] << 24) * 4.65661e-10;
						vb[j + 5] = (b1[i + 150144] << 24) * 4.65661e-10;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);

					var b = d.decompress16(289968);
					var ib = new Uint16Array(289968);
					for (var i = 0, j = 0; i < 96656; ++i, j += 3)
					{
						ib[j] = b[i];
						ib[j + 1] = b[i + 96656];
						ib[j + 2] = b[i + 193312];
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ib, gl.STATIC_DRAW);

					global.scaleOffset5 = new Float32Array([0.0138891, 0.0113603, 0.0141161, 0.0, -455.113, 301.952, -462.552, 0.0]);
					global.scaleOffset4 = new Float32Array([0.00945058, 0.0109956, 0.00975558, 0.0, -321.755, 300.292, -334.252, 0.0]);
					global.scaleOffset3 = new Float32Array([0.00372055, 5.80859e-4, 0.00372055, 0.0, -129.683, 369.25, -137.475, 0.0]);
					global.scaleOffset2 = new Float32Array([0.0138891, 0.0113603, 0.0141161, 0.0, -455.113, 301.952, -462.552, 0.0]);
					global.scaleOffset1 = new Float32Array([0.00533418, 0.0064556, 0.00533418, 0.0, -182.557, 0.0032278, -190.349, 0.0]);
					global.scaleOffset0 = new Float32Array([0.00945058, 0.0109956, 0.00975558, 0.0, -321.755, 300.292, -334.252, 0.0]);

					var shaders = global.shaders;
					{
						var shader = shaders.m_file_cArch41__057__obj__3Shape1;
						var vertexShader = engine.createVertexShader(vsm_file_cArch41__057__obj__3Shape1, "mesh, shader 'file:Arch41_057_obj_3Shape1'");
						var pixelShader = engine.createPixelShader(psm_file_cArch41__057__obj__3Shape1, "mesh, shader 'file:Arch41_057_obj_3Shape1'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 1, '_1');
						gl.bindAttribLocation(program, 0, '_0');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
						shader.s_o = gl.getUniformLocation(program, 's_o');
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_file1_cwire__115115116;
						var vertexShader = engine.createVertexShader(vsm_file1_cwire__115115116, "mesh, shader 'file1:wire_115115116'");
						var pixelShader = engine.createPixelShader(psm_file1_cwire__115115116, "mesh, shader 'file1:wire_115115116'");
						var program = shader.program = gl.createProgram();
						gl.attachShader(program, vertexShader);
						gl.attachShader(program, pixelShader);
						gl.bindAttribLocation(program, 1, '_1');
						gl.bindAttribLocation(program, 0, '_0');
						gl.linkProgram(program);
						gl.deleteShader(vertexShader);
						gl.deleteShader(pixelShader);
						shader._b = gl.getUniformLocation(program, '_b');
						shader._c = gl.getUniformLocation(program, '_c');
						shader.s_o = gl.getUniformLocation(program, 's_o');
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
				},

				doneGlobal: function(global)
				{
					gl.deleteBuffer(global.shaderInputBuffer0);
					gl.deleteBuffer(global.indexBuffer0);
					gl.deleteProgram(global.shaders.m_file_cArch41__057__obj__3Shape1.program);
					gl.deleteProgram(global.shaders.m_file1_cwire__115115116.program);
				},

				render: {
					m_file_cArch41__057__obj__3Shape1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						var transfer = instance.shaders.m_file_cArch41__057__obj__3Shape1.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _c = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_c[0] = G;
						_c[1] = H;
						_c[2] = I;
						_c[4] = J;
						_c[5] = K;
						_c[6] = L;
						_c[8] = M;
						_c[9] = N;
						_c[10] = O;
						_c[12] = q * m + u * n + y * o + C * p;
						_c[13] = r * m + v * n + z * o + D * p;
						_c[14] = s * m + w * n + A * o + E * p;
						_c[16] = P;
						_c[17] = Q;
						_c[18] = R;
						_c[20] = N * I - O * H;
						_c[21] = O * G - M * I;
						_c[22] = M * H - N * G;
						_c[24] = H * L - I * K;
						_c[25] = I * J - G * L;
						_c[26] = G * K - H * J;
						gl.uniform4fv(shader._c, _c);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					},
					m_file1_cwire__115115116_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_file1_cwire__115115116;
						var transfer = instance.shaders.m_file1_cwire__115115116.transfer;
						var _a = transfer._a;
						var matrix = renderJob.data;
						var flip;
						var _c = instance.fu0_28;
						var a = matrix[0];
						var b = matrix[1];
						var c = matrix[2];
						var d = matrix[3];
						var e = matrix[4];
						var f = matrix[5];
						var g = matrix[6];
						var h = matrix[7];
						var i = matrix[8];
						var j = matrix[9];
						var k = matrix[10];
						var l = matrix[11];
						var m = matrix[12];
						var n = matrix[13];
						var o = matrix[14];
						var p = matrix[15];
						var q = _a[0];
						var r = _a[1];
						var s = _a[2];
						var t = _a[3];
						var u = _a[4];
						var v = _a[5];
						var w = _a[6];
						var x = _a[7];
						var y = _a[8];
						var z = _a[9];
						var A = _a[10];
						var B = _a[11];
						var C = _a[12];
						var D = _a[13];
						var E = _a[14];
						var F = _a[15];
						var G = q * a + u * b + y * c + C * d;
						var H = r * a + v * b + z * c + D * d;
						var I = s * a + w * b + A * c + E * d;
						var J = q * e + u * f + y * g + C * h;
						var K = r * e + v * f + z * g + D * h;
						var L = s * e + w * f + A * g + E * h;
						var M = q * i + u * j + y * k + C * l;
						var N = r * i + v * j + z * k + D * l;
						var O = s * i + w * j + A * k + E * l;
						var P = K * O - L * N;
						var Q = L * M - J * O;
						var R = J * N - K * M;
						flip = G * P + H * Q + I * R < 0.0;
						_c[0] = G;
						_c[1] = H;
						_c[2] = I;
						_c[4] = J;
						_c[5] = K;
						_c[6] = L;
						_c[8] = M;
						_c[9] = N;
						_c[10] = O;
						_c[12] = q * m + u * n + y * o + C * p;
						_c[13] = r * m + v * n + z * o + D * p;
						_c[14] = s * m + w * n + A * o + E * p;
						_c[16] = P;
						_c[17] = Q;
						_c[18] = R;
						_c[20] = N * I - O * H;
						_c[21] = O * G - M * I;
						_c[22] = M * H - N * G;
						_c[24] = H * L - I * K;
						_c[25] = I * J - G * L;
						_c[26] = G * K - H * J;
						gl.uniform4fv(shader._c, _c);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
					}
				},
				draw: {
					a: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						gl.uniform4fv(shader.s_o, global.scaleOffset0);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 39504, gl.UNSIGNED_SHORT, 0);
					},
					b: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						gl.uniform4fv(shader.s_o, global.scaleOffset1);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 161484);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 161472);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 33912, gl.UNSIGNED_SHORT, 79008);
					},
					c: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						gl.uniform4fv(shader.s_o, global.scaleOffset2);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 587844);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 587832);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 70344, gl.UNSIGNED_SHORT, 146832);
					},
					d: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						gl.uniform4fv(shader.s_o, global.scaleOffset3);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 895572);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 895560);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 1224, gl.UNSIGNED_SHORT, 287520);
					},
					e: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file1_cwire__115115116;
						gl.uniform4fv(shader.s_o, global.scaleOffset4);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 900876);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 900864);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 39504, gl.UNSIGNED_SHORT, 289968);
					},
					f: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file1_cwire__115115116;
						gl.uniform4fv(shader.s_o, global.scaleOffset1);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 1062348);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 1062336);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 33912, gl.UNSIGNED_SHORT, 368976);
					},
					g: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file1_cwire__115115116;
						gl.uniform4fv(shader.s_o, global.scaleOffset3);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 1488708);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 1488696);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 1224, gl.UNSIGNED_SHORT, 436800);
					},
					h: function(instance, shader)
					{
						var global = instance.global;
						var shader = global.shaders.m_file1_cwire__115115116;
						gl.uniform4fv(shader.s_o, global.scaleOffset5);
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 1494012);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 1494000);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 70344, gl.UNSIGNED_SHORT, 439248);
					}
				},

				createInstance: function(global, renderer)
				{
					var instance = 
					{
						global: global,
						renderer: renderer,
						ids: new Uint32Array(8),
						fstate: new Float32Array(1), 

						shaders:
						{
							m_file_cArch41__057__obj__3Shape1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_file1_cwire__115115116:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							}
						},
						itransforms: new Int32Array(8), ftransforms: new Float32Array(128), 
						fboundingBoxes: new Float32Array(48), 
						sceneSequence: 0,
						deformerSequence: 0,
						renderSequence: 0,
						viewProjectionMatrix: new Float32Array(16),
						fu0_28: new Float32Array(28),
					};

					var particlePools = instance.particlePools = {};

					instance.update = function()
					{
						++instance.sceneSequence;

						var fstate = instance.fstate;
						var buffers = global.buffers;
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						ftransforms[0] = 0.0114971;
						ftransforms[1] = 0.0;
						ftransforms[2] = 0.0;
						ftransforms[3] = 0.0;
						ftransforms[4] = 0.0;
						ftransforms[5] = 0.00880145;
						ftransforms[6] = 0.0;
						ftransforms[7] = 0.0;
						ftransforms[8] = 0.0;
						ftransforms[9] = 0.0;
						ftransforms[10] = 0.0125712;
						ftransforms[11] = 0.0;
						ftransforms[12] = 0.0;
						ftransforms[13] = 0.0;
						ftransforms[14] = 0.0;
						ftransforms[15] = 1.0;
						itransforms[0] = 1;
						ftransforms[16] = 0.0114971;
						ftransforms[17] = 0.0;
						ftransforms[18] = 0.0;
						ftransforms[19] = 0.0;
						ftransforms[20] = 0.0;
						ftransforms[21] = 0.00880145;
						ftransforms[22] = 0.0;
						ftransforms[23] = 0.0;
						ftransforms[24] = 0.0;
						ftransforms[25] = 0.0;
						ftransforms[26] = 0.0125712;
						ftransforms[27] = 0.0;
						ftransforms[28] = 0.0;
						ftransforms[29] = 0.0;
						ftransforms[30] = 0.0;
						ftransforms[31] = 1.0;
						itransforms[1] = 1;
						ftransforms[32] = 0.0114971;
						ftransforms[33] = 0.0;
						ftransforms[34] = 0.0;
						ftransforms[35] = 0.0;
						ftransforms[36] = 0.0;
						ftransforms[37] = 0.00880145;
						ftransforms[38] = 0.0;
						ftransforms[39] = 0.0;
						ftransforms[40] = 0.0;
						ftransforms[41] = 0.0;
						ftransforms[42] = 0.0125712;
						ftransforms[43] = 0.0;
						ftransforms[44] = 0.0;
						ftransforms[45] = 0.0;
						ftransforms[46] = 0.0;
						ftransforms[47] = 1.0;
						itransforms[2] = 1;
						ftransforms[48] = 0.0114971;
						ftransforms[49] = 0.0;
						ftransforms[50] = 0.0;
						ftransforms[51] = 0.0;
						ftransforms[52] = 0.0;
						ftransforms[53] = 0.00880145;
						ftransforms[54] = 0.0;
						ftransforms[55] = 0.0;
						ftransforms[56] = 0.0;
						ftransforms[57] = 0.0;
						ftransforms[58] = 0.0125712;
						ftransforms[59] = 0.0;
						ftransforms[60] = 0.0;
						ftransforms[61] = 0.0;
						ftransforms[62] = 0.0;
						ftransforms[63] = 1.0;
						itransforms[3] = 1;
						ftransforms[64] = 0.0114971;
						ftransforms[65] = 0.0;
						ftransforms[66] = 0.0;
						ftransforms[67] = 0.0;
						ftransforms[68] = 0.0;
						ftransforms[69] = 0.00880145;
						ftransforms[70] = 0.0;
						ftransforms[71] = 0.0;
						ftransforms[72] = 0.0;
						ftransforms[73] = 0.0;
						ftransforms[74] = 0.0125712;
						ftransforms[75] = 0.0;
						ftransforms[76] = 0.0;
						ftransforms[77] = 0.0;
						ftransforms[78] = 0.0;
						ftransforms[79] = 1.0;
						itransforms[4] = 1;
						ftransforms[80] = 0.0114971;
						ftransforms[81] = 0.0;
						ftransforms[82] = 0.0;
						ftransforms[83] = 0.0;
						ftransforms[84] = 0.0;
						ftransforms[85] = 0.00880145;
						ftransforms[86] = 0.0;
						ftransforms[87] = 0.0;
						ftransforms[88] = 0.0;
						ftransforms[89] = 0.0;
						ftransforms[90] = 0.0125712;
						ftransforms[91] = 0.0;
						ftransforms[92] = 0.0;
						ftransforms[93] = 0.0;
						ftransforms[94] = 0.0;
						ftransforms[95] = 1.0;
						itransforms[5] = 1;
						ftransforms[96] = 0.0114971;
						ftransforms[97] = 0.0;
						ftransforms[98] = 0.0;
						ftransforms[99] = 0.0;
						ftransforms[100] = 0.0;
						ftransforms[101] = 0.00880145;
						ftransforms[102] = 0.0;
						ftransforms[103] = 0.0;
						ftransforms[104] = 0.0;
						ftransforms[105] = 0.0;
						ftransforms[106] = 0.0125712;
						ftransforms[107] = 0.0;
						ftransforms[108] = 0.0;
						ftransforms[109] = 0.0;
						ftransforms[110] = 0.0;
						ftransforms[111] = 1.0;
						itransforms[6] = 1;
						ftransforms[112] = 0.0114971;
						ftransforms[113] = 0.0;
						ftransforms[114] = 0.0;
						ftransforms[115] = 0.0;
						ftransforms[116] = 0.0;
						ftransforms[117] = 0.00880145;
						ftransforms[118] = 0.0;
						ftransforms[119] = 0.0;
						ftransforms[120] = 0.0;
						ftransforms[121] = 0.0;
						ftransforms[122] = 0.0125712;
						ftransforms[123] = 0.0;
						ftransforms[124] = 0.0;
						ftransforms[125] = 0.0;
						ftransforms[126] = 0.0;
						ftransforms[127] = 1.0;
						itransforms[7] = 1;
						fboundingBoxes[0] = -12.0832;
						fboundingBoxes[1] = 660.591;
						fboundingBoxes[2] = -14.586;
						fboundingBoxes[3] = 309.676;
						fboundingBoxes[4] = 360.303;
						fboundingBoxes[5] = 319.67;
						fboundingBoxes[6] = -7.76999;
						fboundingBoxes[7] = 211.537;
						fboundingBoxes[8] = -15.5618;
						fboundingBoxes[9] = 174.79;
						fboundingBoxes[10] = 211.537;
						fboundingBoxes[11] = 174.79;
						fboundingBoxes[12] = 1.52587e-4;
						fboundingBoxes[13] = 674.203;
						fboundingBoxes[14] = -9.15527e-5;
						fboundingBoxes[15] = 455.12;
						fboundingBoxes[16] = 372.256;
						fboundingBoxes[17] = 462.559;
						fboundingBoxes[18] = -7.77;
						fboundingBoxes[19] = 388.283;
						fboundingBoxes[20] = -15.5618;
						fboundingBoxes[21] = 121.915;
						fboundingBoxes[22] = 19.0336;
						fboundingBoxes[23] = 121.915;
						fboundingBoxes[24] = -12.0832;
						fboundingBoxes[25] = 660.591;
						fboundingBoxes[26] = -14.586;
						fboundingBoxes[27] = 309.676;
						fboundingBoxes[28] = 360.303;
						fboundingBoxes[29] = 319.67;
						fboundingBoxes[30] = -7.76999;
						fboundingBoxes[31] = 211.537;
						fboundingBoxes[32] = -15.5618;
						fboundingBoxes[33] = 174.79;
						fboundingBoxes[34] = 211.537;
						fboundingBoxes[35] = 174.79;
						fboundingBoxes[36] = 1.52587e-4;
						fboundingBoxes[37] = 674.203;
						fboundingBoxes[38] = -9.15527e-5;
						fboundingBoxes[39] = 455.12;
						fboundingBoxes[40] = 372.256;
						fboundingBoxes[41] = 462.559;
						fboundingBoxes[42] = -7.77;
						fboundingBoxes[43] = 388.283;
						fboundingBoxes[44] = -15.5618;
						fboundingBoxes[45] = 121.915;
						fboundingBoxes[46] = 19.0336;
						fboundingBoxes[47] = 121.915;
					};

					instance.render = function(viewMatrix, projectionMatrix, layerName, renderQueues)
					{
						instance.renderSequence = ++global.sequence;
						var viewProjectionMatrix = instance.viewProjectionMatrix;
						engine.matrix4x4Mul(projectionMatrix, viewMatrix, viewProjectionMatrix);
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						// mesh, shader 'file:Arch41_057_obj_3Shape1'
						var s_ = instance.shaders.m_file_cArch41__057__obj__3Shape1;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						s_.renderJobs = null;
						// mesh, shader 'file1:wire_115115116'
						var s_ = instance.shaders.m_file1_cwire__115115116;
						var uniform = s_.uniform;
						var _b = uniform._b;
						var _a = s_.transfer._a;
						_a[0] = viewMatrix[0];
						_a[1] = viewMatrix[1];
						_a[2] = viewMatrix[2];
						_a[3] = viewMatrix[3];
						_a[4] = viewMatrix[4];
						_a[5] = viewMatrix[5];
						_a[6] = viewMatrix[6];
						_a[7] = viewMatrix[7];
						_a[8] = viewMatrix[8];
						_a[9] = viewMatrix[9];
						_a[10] = viewMatrix[10];
						_a[11] = viewMatrix[11];
						_a[12] = viewMatrix[12];
						_a[13] = viewMatrix[13];
						_a[14] = viewMatrix[14];
						_a[15] = viewMatrix[15];
						_b[0] = projectionMatrix[0];
						_b[1] = projectionMatrix[1];
						_b[2] = projectionMatrix[2];
						_b[3] = projectionMatrix[3];
						_b[4] = projectionMatrix[4];
						_b[5] = projectionMatrix[5];
						_b[6] = projectionMatrix[6];
						_b[7] = projectionMatrix[7];
						_b[8] = projectionMatrix[8];
						_b[9] = projectionMatrix[9];
						_b[10] = projectionMatrix[10];
						_b[11] = projectionMatrix[11];
						_b[12] = projectionMatrix[12];
						_b[13] = projectionMatrix[13];
						_b[14] = projectionMatrix[14];
						_b[15] = projectionMatrix[15];
						s_.renderJobs = null;

						var jobIt = renderQueues.begin;
						var jobEnd = renderQueues.end;
						if (itransforms[0])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file_cArch41__057__obj__3Shape1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file_cArch41__057__obj__3Shape1_5;
								var data = renderJob.data;
								data[0] = ftransforms[0];
								data[1] = ftransforms[1];
								data[2] = ftransforms[2];
								data[3] = ftransforms[3];
								data[4] = ftransforms[4];
								data[5] = ftransforms[5];
								data[6] = ftransforms[6];
								data[7] = ftransforms[7];
								data[8] = ftransforms[8];
								data[9] = ftransforms[9];
								data[10] = ftransforms[10];
								data[11] = ftransforms[11];
								data[12] = ftransforms[12];
								data[13] = ftransforms[13];
								data[14] = ftransforms[14];
								data[15] = ftransforms[15];
								renderJob.draw = global.draw.a;
								renderJob.instance = instance;
							}
						}
						if (itransforms[1])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file_cArch41__057__obj__3Shape1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file_cArch41__057__obj__3Shape1_5;
								var data = renderJob.data;
								data[0] = ftransforms[16];
								data[1] = ftransforms[17];
								data[2] = ftransforms[18];
								data[3] = ftransforms[19];
								data[4] = ftransforms[20];
								data[5] = ftransforms[21];
								data[6] = ftransforms[22];
								data[7] = ftransforms[23];
								data[8] = ftransforms[24];
								data[9] = ftransforms[25];
								data[10] = ftransforms[26];
								data[11] = ftransforms[27];
								data[12] = ftransforms[28];
								data[13] = ftransforms[29];
								data[14] = ftransforms[30];
								data[15] = ftransforms[31];
								renderJob.draw = global.draw.b;
								renderJob.instance = instance;
							}
						}
						if (itransforms[2])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file_cArch41__057__obj__3Shape1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file_cArch41__057__obj__3Shape1_5;
								var data = renderJob.data;
								data[0] = ftransforms[32];
								data[1] = ftransforms[33];
								data[2] = ftransforms[34];
								data[3] = ftransforms[35];
								data[4] = ftransforms[36];
								data[5] = ftransforms[37];
								data[6] = ftransforms[38];
								data[7] = ftransforms[39];
								data[8] = ftransforms[40];
								data[9] = ftransforms[41];
								data[10] = ftransforms[42];
								data[11] = ftransforms[43];
								data[12] = ftransforms[44];
								data[13] = ftransforms[45];
								data[14] = ftransforms[46];
								data[15] = ftransforms[47];
								renderJob.draw = global.draw.c;
								renderJob.instance = instance;
							}
						}
						if (itransforms[3])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file_cArch41__057__obj__3Shape1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file_cArch41__057__obj__3Shape1_5;
								var data = renderJob.data;
								data[0] = ftransforms[48];
								data[1] = ftransforms[49];
								data[2] = ftransforms[50];
								data[3] = ftransforms[51];
								data[4] = ftransforms[52];
								data[5] = ftransforms[53];
								data[6] = ftransforms[54];
								data[7] = ftransforms[55];
								data[8] = ftransforms[56];
								data[9] = ftransforms[57];
								data[10] = ftransforms[58];
								data[11] = ftransforms[59];
								data[12] = ftransforms[60];
								data[13] = ftransforms[61];
								data[14] = ftransforms[62];
								data[15] = ftransforms[63];
								renderJob.draw = global.draw.d;
								renderJob.instance = instance;
							}
						}
						if (itransforms[4])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file1_cwire__115115116;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file1_cwire__115115116_5;
								var data = renderJob.data;
								data[0] = ftransforms[64];
								data[1] = ftransforms[65];
								data[2] = ftransforms[66];
								data[3] = ftransforms[67];
								data[4] = ftransforms[68];
								data[5] = ftransforms[69];
								data[6] = ftransforms[70];
								data[7] = ftransforms[71];
								data[8] = ftransforms[72];
								data[9] = ftransforms[73];
								data[10] = ftransforms[74];
								data[11] = ftransforms[75];
								data[12] = ftransforms[76];
								data[13] = ftransforms[77];
								data[14] = ftransforms[78];
								data[15] = ftransforms[79];
								renderJob.draw = global.draw.e;
								renderJob.instance = instance;
							}
						}
						if (itransforms[5])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file1_cwire__115115116;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file1_cwire__115115116_5;
								var data = renderJob.data;
								data[0] = ftransforms[80];
								data[1] = ftransforms[81];
								data[2] = ftransforms[82];
								data[3] = ftransforms[83];
								data[4] = ftransforms[84];
								data[5] = ftransforms[85];
								data[6] = ftransforms[86];
								data[7] = ftransforms[87];
								data[8] = ftransforms[88];
								data[9] = ftransforms[89];
								data[10] = ftransforms[90];
								data[11] = ftransforms[91];
								data[12] = ftransforms[92];
								data[13] = ftransforms[93];
								data[14] = ftransforms[94];
								data[15] = ftransforms[95];
								renderJob.draw = global.draw.f;
								renderJob.instance = instance;
							}
						}
						if (itransforms[6])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file1_cwire__115115116;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file1_cwire__115115116_5;
								var data = renderJob.data;
								data[0] = ftransforms[96];
								data[1] = ftransforms[97];
								data[2] = ftransforms[98];
								data[3] = ftransforms[99];
								data[4] = ftransforms[100];
								data[5] = ftransforms[101];
								data[6] = ftransforms[102];
								data[7] = ftransforms[103];
								data[8] = ftransforms[104];
								data[9] = ftransforms[105];
								data[10] = ftransforms[106];
								data[11] = ftransforms[107];
								data[12] = ftransforms[108];
								data[13] = ftransforms[109];
								data[14] = ftransforms[110];
								data[15] = ftransforms[111];
								renderJob.draw = global.draw.h;
								renderJob.instance = instance;
							}
						}
						if (itransforms[7])
						{
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_file1_cwire__115115116;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_file1_cwire__115115116_5;
								var data = renderJob.data;
								data[0] = ftransforms[112];
								data[1] = ftransforms[113];
								data[2] = ftransforms[114];
								data[3] = ftransforms[115];
								data[4] = ftransforms[116];
								data[5] = ftransforms[117];
								data[6] = ftransforms[118];
								data[7] = ftransforms[119];
								data[8] = ftransforms[120];
								data[9] = ftransforms[121];
								data[10] = ftransforms[122];
								data[11] = ftransforms[123];
								data[12] = ftransforms[124];
								data[13] = ftransforms[125];
								data[14] = ftransforms[126];
								data[15] = ftransforms[127];
								renderJob.draw = global.draw.g;
								renderJob.instance = instance;
							}
						}
						renderQueues.begin = jobIt;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						var shader = global.shaders.m_file_cArch41__057__obj__3Shape1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_file_cArch41__057__obj__3Shape1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_file_cArch41__057__obj__3Shape1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_file1_cwire__115115116;
						var shader = global.shaders.m_file1_cwire__115115116;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_file1_cwire__115115116.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_file1_cwire__115115116.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
					};

					var fstate = instance.fstate;

					return instance;
				},

				doneInstance: function(instance)
				{
				},

				sequence: 0,

				attributes:
				{
					"time": {t: 1, b: 0, e: 1}
				},

				textureBindings:
				[
				],

				objects:
				{
					"file1:Arch41_057_obj_1Shape[0]": 4,
					"file1:Arch41_057_obj_2Shape[0]": 5,
					"file1:Arch41_057_obj_3Shape[0]": 6,
					"file1:Arch41_057_obj_4Shape[0]": 7,
					"file:Arch41_057_obj_1Shape[0]": 0,
					"file:Arch41_057_obj_2Shape[0]": 1,
					"file:Arch41_057_obj_3Shape[0]": 2,
					"file:Arch41_057_obj_4Shape[0]": 3
				}

			}

		},

		numFiles: 1,
		check: function (){
			return 0;
		}
	};
	return s;
}
(inka3dEngine);
