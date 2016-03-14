ScrollOffset
===================

Un simple plugin de défilement d'ancres en jQuery, avec la possibilité de définir un décalage vertical (offset), par exemple pour tenir compte d'une navbar fixe (ou simplement pour une raison cosmétique).

#Installation

Si vous utilisez Bower, vous pouvez l'installer directement

```bash
$ bower install jquery-scrolloffset
```

Sinon, il vous suffit de récupérer manuellement les fichiers sur github.

#Utilisation

Le principe est basé sur les ancres html.
Appelez simplement la méthode <code>scrollOffset()</code> sur un objet jQuery, qui soit un lien html comportant une ancre.
```javascript
$('a[href^="#"]').scrollOffset();
```

#Options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Valeur par défaut</th>
			<th>Valeurs possibles</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>offset</th>
			<td>0</td>
			<td>Nombre entier</td>
			<td>Définit la valeur (en pixels) du décalage vertical à appliquer.</td>
		</tr>
		<tr>
			<th>duration</th>
			<td>400</td>
			<td>nombre ou valeurs clé de temps jquery (<code>slow</code>, <code>fast</code>)</td>
			<td>Gère le temps de l'animation de défilement vers l'ancre.</td>
		</tr>
		<tr>
			<th>onComplete</th>
			<td>null</td>
			<td>fonction</td>
			<td>Permet d'appeler une fonction de votre choix à la fin du défilement</td>
		</tr>
	</tbody>
</table>

#Évolutions envisagées
* Si l'élément correspondant à l'ancre n'est pas trouvé dans la page → Gérer (renvoyer au top)
* Permettre d'appeler autre chose qu'un ID (choix du sélecteur)
