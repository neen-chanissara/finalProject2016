var เสือพราน = function(engine)
{
	'use strict';
	var s = {
		textures:
		{
		},

		scenes:
		{
			"เสือพราน":
			{
				shaders:
				{
					// mesh, shader 'plants13:violet_1Pdcel1'
					m_plants13_cviolet__1Pdcel1:
					{
					},
					// mesh, shader 'plants13:violet_1InfInt1'
					m_plants13_cviolet__1InfInt1:
					{
					},
					// mesh, shader 'phong1'
					m_phong1:
					{
					},
					// mesh, shader 'plants13:violet_Petiole1'
					m_plants13_cviolet__Petiole1:
					{
					},
					// mesh, shader 'plants13:violet_Intrnd1'
					m_plants13_cviolet__Intrnd1:
					{
					},
					// mesh, shader 'plants13:violet_Leaf1'
					m_plants13_cviolet__Leaf1:
					{
					},
					// mesh, shader 'plants13:violet_1Pdncle1'
					m_plants13_cviolet__1Pdncle1:
					{
					},
					// mesh, shader 'plants13:violet_Mrstm1'
					m_plants13_cviolet__Mrstm1:
					{
					}
				},

				initGlobal: function(global, data)
				{
					// mesh, shader 'plants13:violet_1Pdcel1'
					var vsm_plants13_cviolet__1Pdcel1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__1Pdcel1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.196, 0.3921, 0.196)) * vec3(0.196, 0.3921, 0.196) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.196, 0.3921, 0.196);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'plants13:violet_1InfInt1'
					var vsm_plants13_cviolet__1InfInt1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__1InfInt1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.0, 0.349, 0.0)) * vec3(0.0, 0.349, 0.0) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.0, 0.349, 0.0);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'phong1'
					var vsm_phong1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_phong1 =
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
	vec3 f = c * vec3(0.408248, -0.408248, -0.816497);\n\
	vec3 g = (vec3(0.408248, -0.408248, -0.816497) - (f.x + f.y + f.z) * 2.0 * c) * -(d * inversesqrt(e.x + e.y + e.z));\n\
	vec3 h = vec3(pow(max(g.x + g.y + g.z, 0.0), 20.0) * 0.5);\n\
	if (max(max(h.x, h.y), h.z) < 0.01)\n\
	{\n\
		discard;\n\
	}\n\
	gl_FragColor = vec4(h, 0.0);\n\
}\n\
';

					// mesh, shader 'plants13:violet_Petiole1'
					var vsm_plants13_cviolet__Petiole1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__Petiole1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.0, 0.3176, 0.0)) * vec3(0.0, 0.3176, 0.0) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.0, 0.3176, 0.0);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'plants13:violet_Intrnd1'
					var vsm_plants13_cviolet__Intrnd1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__Intrnd1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.1294, 0.2627, 0.1294)) * vec3(0.1294, 0.2627, 0.1294) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.1294, 0.2627, 0.1294);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'plants13:violet_Leaf1'
					var vsm_plants13_cviolet__Leaf1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__Leaf1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.0, 0.2509, 0.0)) * vec3(0.0, 0.2509, 0.0) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.0, 0.2509, 0.0);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					// mesh, shader 'plants13:violet_Mrstm1'
					var vsm_plants13_cviolet__Mrstm1 =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0 * vec3(0.0173551, 0.0106801, 0.0183446) + vec3(-602.225, -138.219, -444.016);\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
					var psm_plants13_cviolet__Mrstm1 =
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
	vec3 i = (vec3(max(f.x + f.y + f.z, 0.0) * 0.8) + vec3(0.1333, 0.2666, 0.1333)) * vec3(0.1333, 0.2666, 0.1333) + pow(max(h.x + h.y + h.z, 0.0), 2.06) * vec3(0.1333, 0.2666, 0.1333);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

					var d = new engine.Decompressor(new Uint8Array(data, 0));
					var b1 = d.decompress8(59295);
					var b2 = d.decompress16(59295);
					var vb = new Float32Array(118590);
					for (var i = 0, j = 0; i < 19765; ++i, j += 6)
					{
						vb[j + 0] = b2[i + 0];
						vb[j + 1] = b2[i + 19765];
						vb[j + 2] = b2[i + 39530];
						vb[j + 3] = (b1[i + 0] << 24) * 4.65661e-10;
						vb[j + 4] = (b1[i + 19765] << 24) * 4.65661e-10;
						vb[j + 5] = (b1[i + 39530] << 24) * 4.65661e-10;
					}
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ARRAY_BUFFER, vb, gl.STATIC_DRAW);

					var b = d.decompress16(22314);
					var ib = new Uint16Array(22314);
					for (var i = 0, j = 0; i < 7438; ++i, j += 3)
					{
						ib[j] = b[i];
						ib[j + 1] = b[i + 7438];
						ib[j + 2] = b[i + 14876];
					}
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ib, gl.STATIC_DRAW);

					var shaders = global.shaders;
					{
						var shader = shaders.m_plants13_cviolet__1Pdcel1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__1Pdcel1, "mesh, shader 'plants13:violet_1Pdcel1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__1Pdcel1, "mesh, shader 'plants13:violet_1Pdcel1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_plants13_cviolet__1InfInt1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__1InfInt1, "mesh, shader 'plants13:violet_1InfInt1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__1InfInt1, "mesh, shader 'plants13:violet_1InfInt1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_phong1;
						var vertexShader = engine.createVertexShader(vsm_phong1, "mesh, shader 'phong1'");
						var pixelShader = engine.createPixelShader(psm_phong1, "mesh, shader 'phong1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_plants13_cviolet__Petiole1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__Petiole1, "mesh, shader 'plants13:violet_Petiole1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__Petiole1, "mesh, shader 'plants13:violet_Petiole1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_plants13_cviolet__Intrnd1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__Intrnd1, "mesh, shader 'plants13:violet_Intrnd1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__Intrnd1, "mesh, shader 'plants13:violet_Intrnd1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_plants13_cviolet__Leaf1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__Leaf1, "mesh, shader 'plants13:violet_Leaf1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__Leaf1, "mesh, shader 'plants13:violet_Leaf1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
					{
						var shader = shaders.m_plants13_cviolet__Mrstm1;
						var vertexShader = engine.createVertexShader(vsm_plants13_cviolet__Mrstm1, "mesh, shader 'plants13:violet_Mrstm1'");
						var pixelShader = engine.createPixelShader(psm_plants13_cviolet__Mrstm1, "mesh, shader 'plants13:violet_Mrstm1'");
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
						shader.f_f = gl.getUniformLocation(program, 'f_f');
					}
				},

				doneGlobal: function(global)
				{
					gl.deleteBuffer(global.shaderInputBuffer0);
					gl.deleteBuffer(global.indexBuffer0);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__1Pdcel1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__1InfInt1.program);
					gl.deleteProgram(global.shaders.m_phong1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__Petiole1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__Intrnd1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__Leaf1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__1Pdncle1.program);
					gl.deleteProgram(global.shaders.m_plants13_cviolet__Mrstm1.program);
				},

				render: {
					m_plants13_cviolet__1Pdcel1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__1Pdcel1;
						var transfer = instance.shaders.m_plants13_cviolet__1Pdcel1.transfer;
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
					m_plants13_cviolet__1InfInt1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						var transfer = instance.shaders.m_plants13_cviolet__1InfInt1.transfer;
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
					m_phong1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_phong1;
						var shader = global.shaders.m_phong1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_phong1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var transfer = instance.shaders.m_phong1.transfer;
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
						gl.uniform1f(shader.f_f, flip ? 1.0 : -1.0);
						gl.cullFace(flip ? gl.BACK : gl.FRONT);
						renderJob.draw(instance, shader);
						gl.uniform1f(shader.f_f, flip ? -1.0 : 1.0);
						gl.cullFace(flip ? gl.FRONT : gl.BACK);
						renderJob.draw(instance, shader);
					},
					m_plants13_cviolet__Petiole1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__Petiole1;
						var transfer = instance.shaders.m_plants13_cviolet__Petiole1.transfer;
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
					m_plants13_cviolet__Intrnd1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__Intrnd1;
						var transfer = instance.shaders.m_plants13_cviolet__Intrnd1.transfer;
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
					m_plants13_cviolet__Leaf1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__Leaf1;
						var transfer = instance.shaders.m_plants13_cviolet__Leaf1.transfer;
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
					m_plants13_cviolet__1Pdncle1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						var transfer = instance.shaders.m_plants13_cviolet__1Pdncle1.transfer;
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
					m_plants13_cviolet__Mrstm1_5: function(renderJob)
					{
						var instance = renderJob.instance;
						var global = instance.global;
						var shader = global.shaders.m_plants13_cviolet__Mrstm1;
						var transfer = instance.shaders.m_plants13_cviolet__Mrstm1.transfer;
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
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 140892);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 140880);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 1764, gl.UNSIGNED_SHORT, 14460);
					},
					b: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 75660);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 75648);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 840, gl.UNSIGNED_SHORT, 7740);
					},
					c: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 90252);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 90240);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 2520, gl.UNSIGNED_SHORT, 9420);
					},
					d: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 182364);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 182352);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 10800, gl.UNSIGNED_SHORT, 17988);
					},
					e: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 45612);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 45600);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 1470, gl.UNSIGNED_SHORT, 4800);
					},
					f: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 436764);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 436752);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 2520, gl.UNSIGNED_SHORT, 39588);
					},
					g: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 1680, gl.UNSIGNED_SHORT, 0);
					},
					h: function(instance, shader)
					{
						var global = instance.global;
						gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
						gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 28332);
						gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 28320);
						gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
						gl.drawElements(gl.TRIANGLES, 720, gl.UNSIGNED_SHORT, 3360);
					}
				},

				createInstance: function(global, renderer)
				{
					var instance = 
					{
						global: global,
						renderer: renderer,
						ids: new Uint32Array(1),
						fstate: new Float32Array(1), 

						shaders:
						{
							m_plants13_cviolet__1Pdcel1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__1InfInt1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_phong1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__Petiole1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__Intrnd1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__Leaf1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__1Pdncle1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							},
							m_plants13_cviolet__Mrstm1:
							{
								uniform: {_b: new Float32Array(16)},
								transfer: {_a: new Float32Array(16)},
							}
						},
						itransforms: new Int32Array(1), ftransforms: new Float32Array(16), 
						fboundingBoxes: new Float32Array(6), 
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

						ftransforms[0] = 0.0132602;
						ftransforms[1] = 0.0;
						ftransforms[2] = 0.0;
						ftransforms[3] = 0.0;
						ftransforms[4] = 0.0;
						ftransforms[5] = 0.00939706;
						ftransforms[6] = 0.0;
						ftransforms[7] = 0.0;
						ftransforms[8] = 0.0;
						ftransforms[9] = 0.0;
						ftransforms[10] = 0.00698668;
						ftransforms[11] = 0.0;
						ftransforms[12] = 0.0;
						ftransforms[13] = 0.0;
						ftransforms[14] = 0.0;
						ftransforms[15] = 1.0;
						itransforms[0] = 1;
						fboundingBoxes[0] = -33.5407;
						fboundingBoxes[1] = 211.74;
						fboundingBoxes[2] = 157.091;
						fboundingBoxes[3] = 568.693;
						fboundingBoxes[4] = 349.965;
						fboundingBoxes[5] = 601.118;
					};

					instance.render = function(viewMatrix, projectionMatrix, layerName, renderQueues)
					{
						instance.renderSequence = ++global.sequence;
						var viewProjectionMatrix = instance.viewProjectionMatrix;
						engine.matrix4x4Mul(projectionMatrix, viewMatrix, viewProjectionMatrix);
						var itransforms = instance.itransforms;
						var ftransforms = instance.ftransforms;
						var fboundingBoxes = instance.fboundingBoxes;

						// mesh, shader 'plants13:violet_1Pdcel1'
						var s_ = instance.shaders.m_plants13_cviolet__1Pdcel1;
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
						// mesh, shader 'plants13:violet_1InfInt1'
						var s_ = instance.shaders.m_plants13_cviolet__1InfInt1;
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
						// mesh, shader 'phong1'
						var s_ = instance.shaders.m_phong1;
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
						// mesh, shader 'plants13:violet_Petiole1'
						var s_ = instance.shaders.m_plants13_cviolet__Petiole1;
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
						// mesh, shader 'plants13:violet_Intrnd1'
						var s_ = instance.shaders.m_plants13_cviolet__Intrnd1;
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
						// mesh, shader 'plants13:violet_Leaf1'
						var s_ = instance.shaders.m_plants13_cviolet__Leaf1;
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
						// mesh, shader 'plants13:violet_1Pdncle1'
						var s_ = instance.shaders.m_plants13_cviolet__1Pdncle1;
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
						// mesh, shader 'plants13:violet_Mrstm1'
						var s_ = instance.shaders.m_plants13_cviolet__Mrstm1;
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
								var shader = instance.shaders.m_plants13_cviolet__Intrnd1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__Intrnd1_5;
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
								renderJob.draw = global.draw.g;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__Petiole1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__Petiole1_5;
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
								renderJob.draw = global.draw.e;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__Leaf1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__Leaf1_5;
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
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__1Pdncle1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__1Pdncle1_5;
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
								renderJob.draw = global.draw.b;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__1InfInt1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__1InfInt1_5;
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
								renderJob.draw = global.draw.f;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__1Pdcel1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__1Pdcel1_5;
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
								renderJob.draw = global.draw.c;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_phong1;
								var renderJob;
								renderJob = jobIt;
								jobIt = jobIt.n;
								renderJob.next = renderQueues.alphaSort;
								renderQueues.alphaSort = renderJob;
								renderJob.render = global.render.m_phong1_5;
								var data = renderJob.data;
								var a = ftransforms[0];
								var b = ftransforms[1];
								var c = ftransforms[2];
								var d = ftransforms[3];
								var e = ftransforms[4];
								var f = ftransforms[5];
								var g = ftransforms[6];
								var h = ftransforms[7];
								var i = ftransforms[8];
								var j = ftransforms[9];
								var k = ftransforms[10];
								var l = ftransforms[11];
								var m = ftransforms[12];
								var n = ftransforms[13];
								var o = ftransforms[14];
								var p = ftransforms[15];
								data[0] = a;
								data[1] = b;
								data[2] = c;
								data[3] = d;
								data[4] = e;
								data[5] = f;
								data[6] = g;
								data[7] = h;
								data[8] = i;
								data[9] = j;
								data[10] = k;
								data[11] = l;
								data[12] = m;
								data[13] = n;
								data[14] = o;
								data[15] = p;
								var q = fboundingBoxes[0];
								var r = fboundingBoxes[1];
								var s = fboundingBoxes[2];
								var t = a * q + e * r + i * s + m;
								var u = b * q + f * r + j * s + n;
								var v = c * q + g * r + k * s + o;
								var w = d * q + h * r + l * s + p;
								data[16] = (viewProjectionMatrix[2] * t + viewProjectionMatrix[6] * u + viewProjectionMatrix[10] * v + viewProjectionMatrix[14] * w) / (viewProjectionMatrix[3] * t + viewProjectionMatrix[7] * u + viewProjectionMatrix[11] * v + viewProjectionMatrix[15] * w);
								renderJob.draw = global.draw.d;
								renderJob.instance = instance;
							}
							if (jobIt != jobEnd)
							{
								var shader = instance.shaders.m_plants13_cviolet__Mrstm1;
								var renderJob;
								renderJob = jobEnd;
								jobEnd = jobEnd.p;
								renderJob.next = shader.renderJobs;
								shader.renderJobs = renderJob;
								renderJob.render = global.render.m_plants13_cviolet__Mrstm1_5;
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
								renderJob.draw = global.draw.h;
								renderJob.instance = instance;
							}
						}
						renderQueues.begin = jobIt;
						var shader = global.shaders.m_plants13_cviolet__1Pdcel1;
						var shader = global.shaders.m_plants13_cviolet__1Pdcel1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__1Pdcel1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__1Pdcel1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__1InfInt1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__1InfInt1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__Petiole1;
						var shader = global.shaders.m_plants13_cviolet__Petiole1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__Petiole1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__Petiole1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__Intrnd1;
						var shader = global.shaders.m_plants13_cviolet__Intrnd1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__Intrnd1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__Intrnd1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__Leaf1;
						var shader = global.shaders.m_plants13_cviolet__Leaf1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__Leaf1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__Leaf1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						var shader = global.shaders.m_plants13_cviolet__1InfInt1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__1Pdncle1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__1Pdncle1.renderJobs;
						while (current)
						{
							current.render(current);
							current = current.next;
						}
						var shader = global.shaders.m_plants13_cviolet__Mrstm1;
						var shader = global.shaders.m_plants13_cviolet__Mrstm1;
						gl.useProgram(shader.program);
						var uniform = instance.shaders.m_plants13_cviolet__Mrstm1.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.enable(gl.CULL_FACE);
						var current = instance.shaders.m_plants13_cviolet__Mrstm1.renderJobs;
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
					"plants13:violetShape[0]": 0
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
